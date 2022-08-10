import { FriendshipDatabase } from "../data/FriendshipDatabase";
import { friendshipDTO } from "../model/friendship";
import { generateId } from "../services/generateId";

export class FriendshipBusiness {
    public createFriendship = async (input: friendshipDTO) => {
        try {
            const { friend1, friend2 } = input

            if ( !friend1 || !friend2 ) {
                throw new Error("Todos os campos são obrigatórios!");
            }

            const id: string = generateId()

            const friendshipDatabase = new FriendshipDatabase();
            await friendshipDatabase.insertFriendship({
                id,
                friend1,
                friend2
            });
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    public deleteFriendship = async (input: friendshipDTO) => {
        try {

            const friendshipDatabase = new FriendshipDatabase()
            await friendshipDatabase.deleteFriendship(input)
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}