import { BaseDatabase } from "./BaseDatabase";


export class PizzaDatabase extends BaseDatabase {
    private static TABLE_NAME = "ambulnz_pizzas"

    async createPizza(
        name:string,
        price:number,
        ingredients:string
    ): Promise<void> {

        try {
            await this.getConnection()
            .insert({
                name,
                price,
                ingredients
            })
            .into(PizzaDatabase.TABLE_NAME)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }

    }
}