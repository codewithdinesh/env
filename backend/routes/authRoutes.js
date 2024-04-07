import express from "express";
import {
    loginController,
    registerController,
    updateUserController,
    userController,
} from "../controller/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.post("/user_details", requireSignIn, userController);
authRouter.post("/update_user", requireSignIn, updateUserController);



export default authRouter;
