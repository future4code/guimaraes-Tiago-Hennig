import { BaseDatabase } from "./BaseDatabase";
import { friendship, friendshipDTO } from "../model/friendship";

export class FriendshipDatabase extends BaseDatabase {

    private static DB = "labook_friendship"

    public insertFriendship = async (
        relation: friendship
    ) => {
        await FriendshipDatabase.connection(FriendshipDatabase.DB)
            .insert({
                id: relation.id,
                id_friend_1: relation.friend1,
                id_friend_2: relation.friend2
            })
    }


    public deleteFriendship = async (input:friendshipDTO) => {
        try {
            const {friend1, friend2} = input

            const checkId1 = await FriendshipDatabase.connection(FriendshipDatabase.DB).select("*")
            .where("id_friend_1", "like", friend1)
            const checkId2 = await FriendshipDatabase.connection(FriendshipDatabase.DB).select("*")
            .where("id_friend_2", "like", friend2)

            if (!checkId1.length && !checkId2.length) {
                throw new Error()
            }

            return await FriendshipDatabase.connection(FriendshipDatabase.DB)
            .where("id_friend_1", "like", friend1)
            .andWhere("id_friend_2", "like", friend2)
            .del()

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }
}