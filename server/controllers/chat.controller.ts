import { Request, Response } from "express";
import AsyncHandler from "express-async-handler";
import Chat from "../models/chatModel";
import User from "../models/userModel";

export const accessChat = AsyncHandler(
  async (req: Request, res: Response) => {
    const { userId } = req.body;
    let isChat , chatData;
    if (!userId) {
      res.sendStatus(400);
      throw new Error("UserId is missing");
    }

     isChat = await Chat.find({
      isGroup: false,
      $and: [
        {
          user: { $elemMatch: { $eq: req.body.user._id } },
        },
        {
          user: { $elemMatch: { $eq: userId } },
        },
      ],
    })
      .populate("user", "-password")
      .populate("latestMessage");

      isChat = await User.populate(isChat,{
        path:'latestMessage.sender',
        select:"name pic email"
      })
      if(isChat.length > 0)
      {
        res.status(200).json(isChat[0])
      }
      else{
         chatData = {
            chatName:"sender",
            isGroup:false,
            user:[req.body.user._id,userId]
        }
      }
      try{
        const createdChat = await Chat.create(chatData)
        const chat = await Chat.findOne({_id:createdChat._id}).populate("user","-password");
        res.status(200).json(chat)
      }
      catch(error)
      {
        res.status(400);
        throw new Error("Unable to access chat!!")
    }
    }
);

export const fetchChat = AsyncHandler(async (req:Request,res:Response) =>{
    try {
        const chats = await Chat.find({user:{$elemMatch:{$eq:req.body.user._id}}})
        res.status(200).json(chats)
    } catch (error) {
        res.status(400)
        throw new Error("No Chats Available")
    }
})