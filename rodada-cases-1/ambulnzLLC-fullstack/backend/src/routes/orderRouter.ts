import express from "express"
import { OrderController } from "../controller/OrderController"


export const orderRouter = express.Router()

const orderController = new OrderController()

orderRouter.post("/order", orderController.orderPizza)
orderRouter.post("/order/myorders", orderController.getOrderByUser)