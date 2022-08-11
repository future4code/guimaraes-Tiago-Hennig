import { BaseDatabase } from "./BaseDatabase";
import { friendship, friendshipDTO } from "../model/friendship";
import { CustomError } from "../error/CustomError";

export class FriendshipDatabase extends BaseDatabase {

    private static DB = "labook_friendship"

    public insertFriendship = async (
        relation: friendship
    ) => {
        await FriendshipDatabase.connection(FriendshipDatabase.DB)
            .insert({
                id: relation.id1,
                user_id: relation.userId,
                friend_id: relation.friendId
            })

    }

    public mutualFriendship = async (
        relation: friendship
    ) => {
        await FriendshipDatabase.connection(FriendshipDatabase.DB)
        .insert({
            id: relation.id2,
            user_id: relation.friendId,
            friend_id: relation.userId
        })
    }


    public deleteFriendship = async (input:friendshipDTO) => {
        try {
            const {userId, friendId} = input

            const checkId1 = await FriendshipDatabase.connection(FriendshipDatabase.DB).select("*")
            .where("user_id", "like", userId)
            const checkId2 = await FriendshipDatabase.connection(FriendshipDatabase.DB).select("*")
            .where("friend_id", "like", friendId)

            if (!checkId1.length && !checkId2.length) {
                throw new CustomError("A amizade entre estes ids não existe ou um ou mais ids é inválido", 400)
            }

            await FriendshipDatabase.connection(FriendshipDatabase.DB)
            .where("user_id", "like", userId)
            .andWhere("friend_id", "like", friendId)
            .del()

            await FriendshipDatabase.connection(FriendshipDatabase.DB)
            .where("user_id", "like", friendId)
            .andWhere("friend_id", "like", userId)
            .del()

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

}