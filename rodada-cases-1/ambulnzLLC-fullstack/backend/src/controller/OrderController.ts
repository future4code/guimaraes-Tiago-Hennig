import { Request, Response } from "express";
import { OrderBusiness } from "../business/OrderBusiness";


export class OrderController {

    async orderPizza(req: Request, res: Response) {
        
        try {

            const input = {
                token: req.headers.authorization as string,
                pizzaName: req.body.pizzaName,
                quantity: req.body.quantity
            }

            const orderBusiness = new OrderBusiness()
            await orderBusiness.orderPizza(input)

            res.status(200).send("Your order is confirmed. Your pizza is arriving soon!")

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    async getOrderByUser(req: Request, res: Response) {

        try {

            const token = req.headers.authorization as string

            const orderBusiness = new OrderBusiness()
            const orders = await orderBusiness.getOrderByUser(token)

            res.status(200).send(orders)
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

}