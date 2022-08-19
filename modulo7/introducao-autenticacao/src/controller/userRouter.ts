import express from "express";

import { UserController } from "../controller/UserController";

export const userRouter = express.Router()

const userController = new UserController()

userRouter.get('/user', userController.login)
userRouter.post('/signup', userController.signUp)
userRouter.put('/edit',userController.editUser )
userRouter.post('/login', userController.login)

