import mongoose from "mongoose";

const counterschema = new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    count:{
        type:Number,
        default:0
    }
})


export const Counter = mongoose.model("Counter",counterschema);