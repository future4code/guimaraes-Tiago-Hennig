import express from "express"
import { FeedController } from "../FeedController"
import { FriendshipController } from "../FriendshipController"

export const feedRouter = express.Router()

const feedController = new FeedController()

feedRouter.get('/:userId', feedController.getPosts)