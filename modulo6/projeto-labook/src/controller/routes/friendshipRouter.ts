import express from "express"
import { FriendshipController } from "../FriendshipController"

export const friendshipRouter = express.Router()

const friendshipController = new FriendshipController()

friendshipRouter.post("/:friend1/:friend2", friendshipController.createFriendship)