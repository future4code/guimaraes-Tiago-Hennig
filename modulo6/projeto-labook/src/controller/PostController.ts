import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostInputDTO } from "../model/post";

export class PostController {
	public createPost = async (req: Request, res: Response) => {
		try {
			const { photo, description, authorId } = req.body
			let { type } = req.body

			const input: PostInputDTO = {
				photo,
				description,
				type,
				authorId,
			};

			const postBusiness = new PostBusiness();
			await postBusiness.createPost(input);

			res.status(201).send("Post criado!")
		} catch (error: any) {
			res.status(400).send(error.message || error.sqlMessage);
		}
	}



	public getPostById = async (
		req: Request,
		res: Response
	) => {
		try {
			const id = req.params.id


			const postBusiness = new PostBusiness()
			const response = await postBusiness.getPostById(id)

			res.status(201).send(response)
		} catch (error: any) {

		}
	}


	public getAllPosts = async (
		req: Request,
		res: Response
	) => {
		try {

			const postBusiness = new PostBusiness()
			const response = await postBusiness.getAllPosts()

			res.status(201).send(response)
		} catch (error: any) {

		}
	}


}
