import dotenv from "dotenv";
import {AddressInfo} from "net";
import express from "express";
import cors from 'cors'
import { pizzaRouter } from "./routes/pizzaRouter";
import { userRouter } from "./routes/userRouter";
import { orderRouter } from "./routes/orderRouter";

dotenv.config();
const app = express();
app.use(cors())

app.use(express.json());

app.use("/", pizzaRouter)
app.use("/", userRouter)
app.use("/", orderRouter)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})