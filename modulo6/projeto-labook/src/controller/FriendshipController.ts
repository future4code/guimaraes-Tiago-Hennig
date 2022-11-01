import { Request, Response } from "express";
import { FriendshipBusiness } from "../business/FriendshipBusiness";
import { friendshipDTO } from "../model/friendship";

export class FriendshipController {
    public createFriendship = async (req: Request, res: Response) => {
        try {
            const { userId, friendId } = req.params

            const input: friendshipDTO = {
                userId,
                friendId
            };

            const friendshipBusiness = new FriendshipBusiness();
            await friendshipBusiness.createFriendship(input);

            res.status(201).send("Amizade criada!")
        } catch (error: any) {
            res.status(400).send(error.message || error.sqlMessage);
        }
    };

    public deleteFriendship = async (req: Request, res: Response) => {
        try {
            const { userId, friendId } = req.params

            const input: friendshipDTO = {
                userId,
                friendId
            };

            const friendshipBusiness = new FriendshipBusiness();
            await friendshipBusiness.deleteFriendship(input);

            res.status(201).send("Amizade desfeita.")

        } catch (error:any) {
            res.status(400).send("Essa amizade não existe.")
        }
    }
}