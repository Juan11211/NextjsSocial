import mongoose from 'mongoose';


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
   
    });
    console.log('Mongo Connected!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw new Error('Error connecting to MongoDB');
  }
};

export default connect;