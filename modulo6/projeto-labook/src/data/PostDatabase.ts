import { BaseDatabase } from "./BaseDatabase";
import { post } from "../model/post";

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
}

