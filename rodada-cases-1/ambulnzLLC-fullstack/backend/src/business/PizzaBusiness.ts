import { PizzaDatabase } from "../data/PizzaDatabase";
import { MissingInformation } from "../error/errors";
import { Pizza } from "../model/PizzaModel";


export class PizzaBusiness {

    private pizzaDatabase: PizzaDatabase
    constructor(){
        this.pizzaDatabase = new PizzaDatabase()
    }
    
    async createPizza(input:Pizza):Promise<any> {

        const {name, price, ingredients} = input

        if (!name || !price || !ingredients) {
            throw new MissingInformation()
        }

        await this.pizzaDatabase.createPizza(name, price, ingredients)
    }

}