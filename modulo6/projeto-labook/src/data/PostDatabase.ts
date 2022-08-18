import { BaseDatabase } from "./BaseDatabase";
import { post, postDB } from "../model/post";

export class PostDatabase extends BaseDatabase {

   private static DB = "labook_posts"

   public insertPost = async (
      post: post
   ) => {
      await PostDatabase.connection(PostDatabase.DB)
         .insert({
            id: post.id,
            photo: post.photo,
            description: post.description,
            type: post.type,
            author_id: post.authorId
         })
   }

   public getPostById = async (id:any) => {
		try {
			const response: postDB[] = await PostDatabase.connection(PostDatabase.DB)
			.select("*")
			.where("id", "like", id)

			return response

		} catch (error:any) {
			throw new Error(error.message)
		}
	}

   public getAllPosts = async () => {
		try {
			const response: postDB[] = await PostDatabase.connection(PostDatabase.DB)
			.select("*")

			return response

		} catch (error:any) {
			throw new Error(error.message)
		}
	}

}

