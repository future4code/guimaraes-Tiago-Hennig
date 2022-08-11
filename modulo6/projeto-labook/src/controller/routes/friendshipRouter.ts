import express from "express"
import { FriendshipController } from "../FriendshipController"

export const friendshipRouter = express.Router()

const friendshipController = new FriendshipController()

friendshipRouter.post('/:userId/:friendId', friendshipController.createFriendship)
friendshipRouter.delete('/:userId/:friendId', friendshipController.deleteFriendship)