import express from "express"
import { PizzaController } from "../controller/PizzaController"


export const pizzaRouter = express.Router()

const pizzaController = new PizzaController()

pizzaRouter.post("/pizza/create", pizzaController.createPizza)
pizzaRouter.get("/pizza/all", pizzaController.getAllPizzas)