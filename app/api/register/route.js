import connect from "../../lib/db";
import User from "../../../models/User"; // Correct import
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { username, email, password } = await request.json();

  await connect();

  const existingUsername = await User.findOne({ username });

  const existingEmail = await User.findOne({ email });

  if (existingUsername) {
    return new NextResponse(`Username is already taken`);
  }

  if (existingEmail) {
    return new NextResponse(`Email is already taken`);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();

    return new NextResponse('User is registered', {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(`User is not registering`, {
      status: 500,
    });
  }
};
