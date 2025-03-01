import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.mongodb_url);
        console.log(conn.connection.host);
    }catch(error){
        console.lof(error.message);
        process.exit(1) // 1 fail , 0 success
    }
}

export default connectDB;