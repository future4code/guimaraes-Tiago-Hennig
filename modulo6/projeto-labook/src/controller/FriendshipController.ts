import { Request, Response } from "express";
import { FriendshipBusiness } from "../business/FriendshipBusiness";
import { friendshipDTO } from "../model/friendship";

export class FriendshipController {
    public createFriendship = async (req: Request, res: Response) => {
        try {
            const { friend1, friend2 } = req.params

            const input: friendshipDTO = {
                friend1,
                friend2
            };

            const friendshipBusiness = new FriendshipBusiness();
            await friendshipBusiness.createFriendship(input);

            res.status(201).send("Amizade criada!")
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    };
}