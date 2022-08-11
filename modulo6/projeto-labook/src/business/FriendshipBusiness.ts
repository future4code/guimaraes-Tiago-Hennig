import { FriendshipDatabase } from "../data/FriendshipDatabase";
import { friendshipDTO } from "../model/friendship";
import { generateId } from "../services/generateId";

export class FriendshipBusiness {
    public createFriendship = async (input: friendshipDTO) => {
        try {
            const { userId, friendId } = input

            if ( !userId || !friendId ) {
                throw new Error("Todos os campos são obrigatórios!");
            }

            const id1: string = generateId()
            const id2: string = generateId()

            const friendshipDatabase = new FriendshipDatabase();
            await friendshipDatabase.insertFriendship({
                id1,
                userId,
                friendId
            });
            await friendshipDatabase.mutualFriendship({
                id2,
                userId,
                friendId
            })
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