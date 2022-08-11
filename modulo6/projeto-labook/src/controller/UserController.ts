import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/user";


export class UserController {

   public createUser = async (
      req: Request,
      res: Response
   ) => {
      try {
         const { name, email, password } = req.body

         const input: UserInputDTO = {
            name,
            email,
            password
         }

         const userBusiness = new UserBusiness
         await userBusiness.createUser(input)

         res.status(201).send("Usuário criado!")
      } catch (error: any) {
         res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
      }
   }

   public getUser = async (
      req: Request,
      res: Response
   ) => {
      try {
         const userBusiness = new UserBusiness()
         const response = await userBusiness.getUser()

         res.status(201).send(response)
      } catch (error:any) {
         res.status(400).send(error.message)
      }
   }

   public getUserById = async (
      req: Request,
      res: Response
   ) => {
      try {
         const id = req.params.id


         const userBusiness = new UserBusiness()
         const response = await userBusiness.getUserById(id)

         res.status(201).send(response)
      } catch (error:any) {
         
      }
   }




}
