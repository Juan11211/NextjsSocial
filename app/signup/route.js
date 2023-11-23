import { NextResponse } from "next/server";
import connect from "../lib/db";
import User from "../lib/models/User";
import bcrypt from 'bcryptjs'

export const POST = async(request) => { 
    const {username, email, password} = await request.json();

    await connect(); 

    const existingUsername = await User.findOne({username})
    
    const existingEmail = await User.findOne({email});

    if(existingUsername){
        return new NextResponse(`Username is already takene`)
    }

    if(existingEmail){
        return new NextResponse(`Email is already taken`)
    };


    try{

    } catch(err){
        return new NextResponse(err, {
            status: 500,
        })
    }

}