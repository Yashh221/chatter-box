import express, {Express } from "express";
import dotenv from 'dotenv'
import path = require("path");
import connectDB from "./config/db";
import { router } from './routes/userRoutes'
import { notFound , errorHandler } from "./middlewares/errorMiddleware";
import chatRouter from "./routes/chatRoutes";
dotenv.config({path:path.resolve(__dirname, './.env') })

connectDB();

const app : Express = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Port is listening at ${PORT}`)
})
app.use(express.json())
app.use('/api/user',router)
app.use('/api/chats',chatRouter)
app.use(notFound)
app.use(errorHandler)