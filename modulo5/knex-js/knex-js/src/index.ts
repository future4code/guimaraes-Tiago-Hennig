import connection from "./connection";
import app from "./app";
import { Request, Response } from "express"

// app.put("/test", async (req, res) => {

//     try {
//         await connection("Actor")
//         .avg()
//         .where({
//             gender: req.body.gender
//         });
//         res.send("Sucesso!")
//     } catch(e) {
//         res.send(e)
//     }

// })






app.get("/actor/:gender", async (req: Request, res: Response) => {
    try {
    const gender = req.params.gender;
    const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = '${gender}'
`)

    res.status(200).send(result[0])

    } catch (err) {
    res.status(400).send({
        message: err,
    });
    }
});






