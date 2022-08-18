import express from "express"
import { PostController } from "../PostController"

export const postRouter = express.Router()

const postController = new PostController()

postRouter.post("/post", postController.createPost)
postRouter.get('/post/:id', postController.getPostById)
postRouter.get("/allposts", postController.getAllPosts)
