import { Counter } from "../models/modelcounter.js";


export const incrementvisit = async(req,res)=>{
    try {
        let counter = await Counter.findOne({name:"site"});

        if(!counter){
            counter = await Counter.create({name:"site",count:1})
        }else{
            counter.count +=1;
            await counter.save()
        }
        res.status(200).json({visits:counter.count})
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"})
        
    }
}