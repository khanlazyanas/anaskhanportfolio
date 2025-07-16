import mongoose from "mongoose";

const MessageSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
}) 

 const Message = mongoose.model("Message",MessageSchema)
 export default Message