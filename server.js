import app from "./app.js"
import dotenv from "dotenv"
import connectdb from "./data/database.js"


// Load env vars
dotenv.config()




const PORT = process.env.PORT

// connect to db 
connectdb();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})