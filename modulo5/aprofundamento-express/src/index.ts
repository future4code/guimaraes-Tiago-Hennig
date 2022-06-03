import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { todos } from "./data"


const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("DEU CERTO")
})

app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("pong")
})

app.get("/todos/", (req:Request , res: Response) => {

    const todoList = todos

    if (req.query.done === "false") {

        const filterCompleted = todoList.filter((element) => 
            element.completed === false
        )

        res.status(200).send(filterCompleted)

    } else if (req.query.done === "true") {
        const filterCompleted = todoList.filter((element) => 
        element.completed === true
    )
        res.status(200).send(filterCompleted)
    } else {
        res.status(400).send("Erro")
    }
})


app.post("/todos", (req: Request, res: Response) => {

    



})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});