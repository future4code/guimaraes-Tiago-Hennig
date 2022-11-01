import { FriendshipDatabase } from "../data/FriendshipDatabase";
import { InvalidRequest } from "../error/InvalidRequest";
import { friendshipDTO } from "../model/friendship";
import { generateId } from "../services/generateId";

export class FriendshipBusiness {
    public createFriendship = async (input: friendshipDTO) => {
        try {
            const { userId, friendId } = input

            if ( !userId || !friendId ) {
                throw new InvalidRequest()
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
            throw new Error(error.message || error.sqlMessage);
        }
    };

    public deleteFriendship = async (input: friendshipDTO) => {
        try {
            const { userId, friendId } = input

            if ( !userId || !friendId ) {
                throw new InvalidRequest()
            }

            const friendshipDatabase = new FriendshipDatabase()
            await friendshipDatabase.deleteFriendship(input)
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}