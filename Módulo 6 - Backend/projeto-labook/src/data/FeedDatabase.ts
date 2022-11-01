import { postFeed } from "../model/post";
import { BaseDatabase } from "./BaseDatabase";

export class FeedDatabase extends BaseDatabase {

    public getPosts = async (
        userId: string
    ) => {
        const response: postFeed[] = await FeedDatabase.connection("labook_posts")
            .select("labook_users.name", "labook_posts.photo", 
                "labook_posts.description",
                "labook_posts.type", "labook_posts.created_at")
            .join("labook_friendship", "labook_posts.author_id", "labook_friendship.friend_id")
            .join("labook_users", "labook_users.id", "labook_posts.author_id")
            .where("labook_friendship.user_id", "like", userId)
            .orderBy("labook_posts.created_at", "desc")

        return response
    }
}