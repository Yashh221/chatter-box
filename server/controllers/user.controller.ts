import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import User from "../models/userModel";

export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, password, pic } = req.body;
    if (!name || !email || !password || !pic) {
      res.status(400);
      throw new Error("Please Enter all the fields");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already registered");
    }
    const user = await User.create({
      name,
      email,
      password,
      pic,
    });
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(400);
      throw new Error("Failed to register the user");
    }
  }
);
