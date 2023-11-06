import { Router } from "express";
import { authUser, registerUser } from "../controllers/user.controller";
export const router = Router();

router.route('/register').post(registerUser)
router.route('/login').post(authUser)