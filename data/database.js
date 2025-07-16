import mongoose from "mongoose";


const connectdb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            dbName:"Messagefromportfolio"
        });
        console.log(`mongodb connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`DB connection error ${error.message}`)
        process.exit(1)
    }
}

export default connectdb;