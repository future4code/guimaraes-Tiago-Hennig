import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";


export class UserController {

    async createUser(req: Request, res: Response) {

        try {
            const input = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const token = await userBusiness.createUser(input)

            res.status(200).send({token})

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    async login(req: Request, res: Response) {

        try {
            const input = {
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const token = await userBusiness.login(input)

            res.status(200).send({message: "Welcome!", token})

        } catch (error:any) {
            res.status(400).send(error.message)
        }

    }
    
}