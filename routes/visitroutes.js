import express from "express";
import { incrementvisit } from "../controllers/visitcontrollers.js";

const router = express.Router();

router.get('/',incrementvisit)


export default router;