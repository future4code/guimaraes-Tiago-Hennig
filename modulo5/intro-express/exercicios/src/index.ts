import express from "express"
import cors from "cors"
import { Request, Response } from "express"
import { users, posts } from "./data"

const app = express()
app.use(express.json())
app.use(cors())




app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Deu certo")
})


app.get("/users", (req: Request, res: Response) => {

    try {

        const usersList = users

        // const result = usersList.flat(1)

        res.status(200).send(usersList)
    }
    catch(error) {
        res.status(400).end()
    }
})

// app.get("/users/posts", (req: Request, res: Response) => {

//     try {

//         const userPost = posts
//         res.status(200).send(userPost)

//     }
//     catch(error) {
//         res.status(400).end()
//     }
// })

app.get('/users/posts/', (req: Request, res: Response) => {

    if (req.query.id){

        console.log(req.query)
        const userPost = posts

        const filterUserID = userPost.filter((element) => {  
            return element.userId === Number(req.query.id)}
        )

        res.status(200).send(filterUserID)

    } else if (req.query) {
        const userPost = posts
        res.status(200).send(userPost)
    } else {
        res.status(400).end()
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})