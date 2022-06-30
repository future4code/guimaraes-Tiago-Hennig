import connection from "./connection";
import app from "./app";
import { Request, Response } from "express"

// 1

// a

// app.get("/users/", async (req: Request, res: Response) => {

//     let name = req.query.name

//     if (!name) {
//         name = ""
//     }

//     try {
//         const result = await connection.raw(`
//     SELECT id, name, email, type
//     FROM aula48_exercicio WHERE name LIKE '%${name}%'
//     `)

//     res.status(200).send(result[0])
//     } catch (err) {
//         res.send(err)
//     }


// })

// b

// app.get("/users/:type", async (req: Request, res: Response) => {

//     let type = req.params.type

//     if (!type) {
//         type = ""
//     }

//     try {
//         const result = await connection.raw(`
//     SELECT id, name, email, type
//     FROM aula48_exercicio WHERE type LIKE '%${type}%'
//     `)

//     res.status(200).send(result[0])
//     } catch (err) {
//         res.send(err)
//     }
    
// })

// 2

// a

app.get("/users/:type", async (req: Request, res: Response) => {

    let type = req.params.type

    if (!type) {
        type = ""
    }

    try {
        const result = await connection.raw(`
    SELECT id, name, email, type
    FROM aula48_exercicio WHERE type LIKE '%${type}%'
    ORDER BY email ASC
    `)

    res.status(200).send(result[0])
    } catch (err) {
        res.send(err)
    }
    
})




