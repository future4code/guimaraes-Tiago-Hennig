import { BaseDatabase } from "./BaseDatabase";
import { friendship } from "../model/friendship";

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
}