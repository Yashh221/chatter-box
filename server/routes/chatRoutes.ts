import express from 'express'
import { protect } from '../middlewares/authMiddleware'
import { accessChat,fetchChat } from '../controllers/chat.controller';

const chatRouter = express.Router();

chatRouter.route("/").post(protect,accessChat)//accessChat
chatRouter.route("/").get(protect,fetchChat)
// router.route("/group").post(protect,createGroupChat)
// router.route("/renamegroup").put(protect,renameGroup)
// router.route("/removegroup").put(protect,removeFromGroup)
// router.route("/groupadd").put(protect,addToGroup)

export default chatRouter;