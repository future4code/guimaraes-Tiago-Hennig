import { PostDatabase } from "../data/PostDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/InvalidRequest";
import { PostInputDTO, postType } from "../model/post";
import { generateId } from "../services/generateId";

export class PostBusiness {
  public createPost = async (input: PostInputDTO) => {
    try {
      const { photo, description, authorId, type } = input

      if (!photo || !description || !type || !authorId ) {
        throw new InvalidRequest();
      }

      if (!(Object.values(postType).includes(type))) {
        throw new CustomError('O tipo do post deve ser "normal" ou "event".', 400)
    }

      const id: string = generateId()

      const postDatabase = new PostDatabase();
      await postDatabase.insertPost({
        id,
        photo,
        description,
        type,
        authorId,
      });
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage);
    }
  };
}

