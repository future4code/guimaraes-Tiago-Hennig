import { FeedDatabase } from "../data/FeedDatabase";


export class FeedBusiness {
    public getPosts = async (userId: string) => {
        try {

            if (!userId ) {
                throw new Error("Informe o id de um usuário válido!");
            }

            const feedDatabase = new FeedDatabase();
            const response = await feedDatabase.getPosts(userId);

            return response
        } catch (error: any) {
            throw new Error(error.message);
        }
    };
}