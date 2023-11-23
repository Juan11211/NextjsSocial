import mongoose from 'mongoose';

const connect = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Mongo Connected!")
    } catch(error) {
        throw new Error('Error connecting to mongodb')
    }
}

export default connect;