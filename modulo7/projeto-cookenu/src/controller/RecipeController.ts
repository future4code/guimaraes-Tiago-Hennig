import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";


const recipeBusiness = new RecipeBusiness()

export class RecipeController {

    public createRecipe = async (req: Request, res: Response) => {

        try {
            const { title, description } = req.body
            const token = req.headers.authorization as string

            const input = {
                title,
                description,
                token
            }

            await recipeBusiness.createRecipe(input)

            res.status(200).send("Receita criada com sucesso!")
            
        } catch (error:any) {
            
        }
    }


    public getRecipe = async (req: Request, res: Response) => {

        try {

            const id = req.params.id
            const token = req.headers.authorization as string

            const input = {
                id,
                token
            }

            const result = await recipeBusiness.getRecipe(input)

            res.status(200).send(result)
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }

    }


    public getAllRecipes = async (req: Request, res: Response) => {

        try {

            const token = req.headers.authorization as string

            const result = await recipeBusiness.getAllRecipes(token)

            res.status(200).send(result)
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }

    }

}