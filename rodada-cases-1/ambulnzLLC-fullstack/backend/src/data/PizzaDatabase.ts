import { BaseDatabase } from "./BaseDatabase";


export class PizzaDatabase extends BaseDatabase {
    private static TABLE_NAME = "ambulnz_pizzas"

    async createPizza(
        name:string,
        price:number,
        ingredients:string,
        img_url:string
    ): Promise<void> {

        try {
            await this.getConnection()
            .insert({
                name,
                price,
                ingredients,
                img_url
            })
            .into(PizzaDatabase.TABLE_NAME)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }

    }

    async findPizzaByName(pizzaName:string) {
        try {

            const result = await this.getConnection()
            .select("*").where("name", "like", pizzaName)
            .into(PizzaDatabase.TABLE_NAME)

            return result[0]
            
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getAllPizzas() {
        try {
            
            const result = await this.getConnection()
            .select("*").into(PizzaDatabase.TABLE_NAME)
            
            return result

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}