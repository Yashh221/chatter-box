import express, {Express } from "express";
import dotenv from 'dotenv'
import path = require("path");
import connectDB from "./config/db";
import { router } from './routes/userRoutes'
dotenv.config({path:path.resolve(__dirname, './.env') })

connectDB();

const app : Express = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Port is listening at ${PORT}`)
})
app.use(express.json())
app.use('/api/user',router)