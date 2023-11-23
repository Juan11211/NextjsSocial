import mongoose from 'mongoose';

const connect = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            
        })
    } catch {

    }
}