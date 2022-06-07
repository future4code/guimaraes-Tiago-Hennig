import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Todo, todos } from "./data"


const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("DEU CERTO")
})

app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("pong")
})

// exercicio 4

app.get("/todos", (req:Request , res: Response) => {

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

// exercício 5

app.post("/todos", (req, res) => {

        const userId = req.body.userId
        const title = req.body.title

        const newTodo: Todo = {
        userId: userId,
        id: Math.random(),
        title,
        completed: false
        }

        todos.push(newTodo)

        res.status(200).send(todos)

})

// exercicio 6

app.put("/todos", (req, res) => {

    const id = Number(req.query.id)

    for (let element of todos) {
        if (element.id === id) {
            element.completed = !element.completed
        }
    }

    res.status(200).send(todos)
})

// exercicio 7

app.delete("/todos", (req, res) => {

    const id = Number(req.query.id)

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            todos.splice(i , 1)
        }
        res.status(200).send(todos)
    }
})

// exercicio 8

app.get("/todos/each/" , (req, res) => {

    const id = Number(req.query.id)
    let newTodos:Todo[] = []

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            newTodos.push(todos[i])
        }
    }
    res.status(200).send(newTodos)


})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});