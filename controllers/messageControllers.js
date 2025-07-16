import Message from "../models/messagemodel.js";
export const sendmessage = async(req,res)=>{
  const {name,email,message} = req.body;

  if(!name || !email || !message){
    return res.status(400).json({success:false,message:"All field required"});
  }

  try {
    const newMessage = await Message.create({name,email,message})
    res.status(201).json({status:true,message:"Message sent successfully",data: newMessage})
  } catch (error) {
    res.status(500).json({success:false,message:"Server error", error: error.message})
  }
};

