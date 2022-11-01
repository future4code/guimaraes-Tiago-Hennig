import express from "express"
import { FeedController } from "../FeedController"

export const feedRouter = express.Router()

const feedController = new FeedController()

feedRouter.get('/:userId', feedController.getPosts)