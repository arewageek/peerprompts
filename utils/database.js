import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("MongoDB is already connected")
        return false;
    }
    
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'peer_prompts',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log("MongoDB connected")
    }
    catch(e){
        console.error(e)
    }
}

export default connectDB