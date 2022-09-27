import { Request, Response } from "express";
import { PizzaBusiness } from "../business/PizzaBusiness";
import { Pizza } from "../model/PizzaModel";


export class PizzaController {

    async createPizza(req: Request, res: Response) {
        
        try {
            const input:Pizza = {
                name: req.body.name,
                price: req.body.price,
                ingredients: req.body.ingredients,
                img_url: req.body.img_url
            }

            const pizzaBusiness = new PizzaBusiness()
            await pizzaBusiness.createPizza(input)

            res.status(200).send("A new pizza was added on the menu.")

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }


    async getAllPizzas(req: Request, res: Response) {

        try {
            
            const pizzaBusiness = new PizzaBusiness()
            const result = await pizzaBusiness.getAllPizzas()

            res.status(200).send(result)

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

}