import { Request, Response } from "express";
import { PizzaBusiness } from "../business/PizzaBusiness";
import { Pizza } from "../model/PizzaModel";


export class PizzaController {

    async createPizza(req: Request, res: Response) {
        
        try {
            const input:Pizza = {
                name: req.body.name,
                price: req.body.price,
                ingredients: req.body.ingredients
            }

            const pizzaBusiness = new PizzaBusiness()
            await pizzaBusiness.createPizza(input)

            res.status(200).send("A new pizza was added on the menu.")
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

}