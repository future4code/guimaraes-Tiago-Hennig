import express from "express";

import { UserController } from "../UserController";

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post('/signup', userController.signup)
userRouter.post('/login', userController.login)
userRouter.get('/user/profile', userController.getOwnProfile)
userRouter.get('/user/:id', userController.getAnotherProfile)
userRouter.get('/users', userController.getAllUsers)
