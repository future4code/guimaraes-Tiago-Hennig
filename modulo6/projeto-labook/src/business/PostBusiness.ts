import { PostDatabase } from "../data/PostDatabase";
import { PostInputDTO, postType } from "../model/post";
import { generateId } from "../services/generateId";

export class PostBusiness {
  public createPost = async (input: PostInputDTO) => {
    try {
      const { photo, description, authorId, type } = input

      if (!photo || !description || !type || !authorId ) {
        throw new Error("Todos os campos são obrigatórios!");
      }

      if (!(Object.values(postType).includes(type))) {
        throw new Error('O tipo do post deve ser "normal" ou "event".')
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
      throw new Error(error.message);
    }
  };
}

