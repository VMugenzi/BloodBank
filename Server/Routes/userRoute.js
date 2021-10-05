import express from "express";
import userController from "../Controllers/userController";


const userRouter=express.Router();

userRouter.post("/signup", userController.signupUser);


export default userRouter;