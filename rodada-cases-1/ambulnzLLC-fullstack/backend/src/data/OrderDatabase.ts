import { Order } from "../model/OrderModel";
import { BaseDatabase } from "./BaseDatabase";


export class OrderDatabase extends BaseDatabase {
    private static TABLE_NAME = "ambulnz_orders"

    async orderPizza(
        input:Order
    ): Promise<void> {

        try {
            const {id, userId, pizzaName, quantity} = input

            await this.getConnection()
            .insert({
                id,
                user_id: userId,
                pizza_name: pizzaName,
                quantity
            })
            .into(OrderDatabase.TABLE_NAME)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

    async getOrderByUser(userId:string) {

        try {
            const orders = await this.getConnection()
                .select("*")
                .where("user_id", "like", userId)
                .into(OrderDatabase.TABLE_NAME)

            return orders

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}