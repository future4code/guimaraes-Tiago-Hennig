import { Request, Response } from "express";
import { FeedBusiness } from "../business/FeedBusiness";

export class FeedController {
    public getPosts = async (req: Request, res: Response) => {
        try {
            const userId: string = req.params.userId

            const feedBusiness = new FeedBusiness();
            const response = await feedBusiness.getPosts(userId);

            res.status(201).send(response)
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    };
}