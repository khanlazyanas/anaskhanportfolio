import express from "express"
import cors from "cors"
import messageRoutes from "./routes/messageroute.js"


const app = express()

// using middlewares

const allowedOrigins = ["http://localhost:5173", "https://your-frontend-deployed-url.com"];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
}));


app.use(express.json())


// Routes
app.use("/api/message",messageRoutes)
app.get("/",(req,res)=>{
    res.send("Working")
})

export default app;