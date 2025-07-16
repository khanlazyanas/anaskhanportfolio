import express from "express"
import cors from "cors"
import messageRoutes from "./routes/messageroute.js"


const app = express()

// using middlewares

app.use(cors({
    origin: "http://localhost:5173/"  
}));app.use(express.json())


// Routes
app.use("/api/message",messageRoutes)
app.get("/",(req,res)=>{
    res.send("Working")
})

export default app;