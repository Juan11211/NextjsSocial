// Import necessary modules
import connect from "../../lib/db";
import User from "../../../models/User";
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";
import { CredentialsProvider } from "next-auth/providers";
import NextAuth from "next-auth";

// Define authentication options
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { username, password } = credentials;

        try {
          await connect();
          const user = await User.findOne({ username });

          if (!user) {
            // User not found
            return new NextResponse(`Incorrect username`, {
              status: 401,
            });
          }

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (!passwordMatch) {
            // Incorrect password
            return new NextResponse(`Incorrect password`, {
              status: 401,
            });
          }

          // Authentication successful, return user object
          return Promise.resolve(user); // Use Promise.resolve for returning the user
        } catch (err) {
          console.error('Authentication error:', err);
          // Internal Server Error
          return new NextResponse('Internal Server Error', {
            status: 500,
          });
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET,
  pages: {
    register: "/", // Specify your register page
  },
};

// Create the authentication handler
const handler = NextAuth(authOptions);

// Export the handler for both GET and POST requests
export { handler as GET, handler as POST };
