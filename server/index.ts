import { chats } from "./dummyData/data";
import express, {Express, Request, Response } from "express";
import dotenv from 'dotenv'
dotenv.config()

const app : Express = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Port is listening at ${PORT}`)
})
app.get("/api/chats",(req:Request,res:Response)=>{
    res.send(chats)
    console.log(req)
})

app.get("/api/chat/:id",(req:Request,res:Response) => {
    console.log(req.params.id)
    const chat = chats.find((c)  => c._id === req.params.id)
    res.send(chat)
})