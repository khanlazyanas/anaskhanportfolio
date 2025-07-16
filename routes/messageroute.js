import express from "express"
import { sendmessage } from "../controllers/messageControllers.js"

const router = express.Router()

router.post("/", sendmessage)

export default router;