import { OrderDatabase } from "../data/OrderDatabase"
import { PizzaDatabase } from "../data/PizzaDatabase";
import { CustomError, MissingInformation } from "../error/errors"
import { Order } from "../model/OrderModel";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

const authenticator = new Authenticator()
const idGenerator = new IdGenerator()

export class OrderBusiness {

    private orderDatabase: OrderDatabase
    constructor(){
        this.orderDatabase = new OrderDatabase()
    }


    async orderPizza(input:any) {

        const {token, pizzaName, quantity} = input

        if ( !pizzaName || !quantity) {
            throw new MissingInformation()
        }

        if ( !token ) {
            throw new CustomError(400, "No token provided.")
        }

        const tokenData = authenticator.getTokenData(token)

        if (!tokenData.id) {
            throw new CustomError(400, "Invalid token. Try logging in again.")
        }

        const id: string = idGenerator.generateId()

        const pizzaDatabase = new PizzaDatabase()
        const checkPizza = await pizzaDatabase.findPizzaByName(pizzaName)

        if (!checkPizza) {
            throw new CustomError(404, "This pizza flavour doesn't exist.")
        }

        const order:Order = {
            id,
            userId: tokenData.id,
            pizzaName,
            quantity
        }

        await this.orderDatabase.orderPizza(order)

    }


    async getOrderByUser(token:string) {

        if (!token) {
            throw new CustomError(400, "No token provided.")
        }

        const tokenData = authenticator.getTokenData(token)

        if (!tokenData.id) {
            throw new CustomError(400, "Invalid token. Try logging in again.")
        }

        const orders = await this.orderDatabase.getOrderByUser(tokenData.id)

        return orders

    }

}