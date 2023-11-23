import { connect } from '../lib/db';
import User from '../lib/models/User';
import jwt from 'jsonwebtoken';

connect();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    try {
      // Hash the password before saving it to the database
      const hashedPassword = ""; // use a password hashing library

      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();

      // Generate a JWT token for the newly created user
      const token = jwt.sign(
        { userId: newUser._id, email: newUser.email },
        process.env.SECRET, 
        
      );

      // Send the token to the client
      res.status(201).json({ message: 'User created successfully', token });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
