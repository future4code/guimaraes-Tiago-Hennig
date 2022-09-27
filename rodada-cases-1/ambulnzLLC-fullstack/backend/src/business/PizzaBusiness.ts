import { PizzaDatabase } from "../data/PizzaDatabase";
import { MissingInformation } from "../error/errors";
import { Pizza } from "../model/PizzaModel";


export class PizzaBusiness {

    private pizzaDatabase: PizzaDatabase
    constructor(){
        this.pizzaDatabase = new PizzaDatabase()
    }
    
    async createPizza(input:Pizza):Promise<any> {

        const {name, price, ingredients, img_url} = input

        if ( !name || !price || !ingredients || !img_url ) {
            throw new MissingInformation()
        }

        await this.pizzaDatabase.createPizza(name, price, ingredients, img_url)
    }

    async getAllPizzas() {

        const result = await this.pizzaDatabase.getAllPizzas()

        return result
    }

}