import express from "express"
import { UserController } from "../controller/UserController"


export const userRouter = express.Router()

const userController = new UserController()

userRouter.post("/user/create", userController.createUser)
userRouter.post("/user/login", userController.login)