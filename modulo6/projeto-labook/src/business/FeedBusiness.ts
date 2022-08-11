import { FeedDatabase } from "../data/FeedDatabase";
import { CustomError } from "../error/CustomError";


export class FeedBusiness {
    public getPosts = async (userId: string) => {
        try {

            if (!userId ) {
                throw new CustomError("Informe o id de um usuário válido!", 400);
            }

            const feedDatabase = new FeedDatabase();
            const response = await feedDatabase.getPosts(userId);

            return response
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }
    };
}