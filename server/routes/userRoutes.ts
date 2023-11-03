import { Router } from "express";
import { registerUser } from "../controllers/user.controller";
export const router = Router();

// router.route('/login').post(authUser)
router.route('/register').post(registerUser)