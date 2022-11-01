import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { userInputDTO } from "../model/userInputDTO";

export class UserController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { email, name, password } = req.body;

      const user: userInputDTO = {
        email,
        name,
        password
      }

      const userBusiness = new UserBusiness();
      await userBusiness.create(user);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
