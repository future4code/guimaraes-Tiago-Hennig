import connection from "./connection";
import app from "./app";
import { Request, Response } from "express"
import { idText } from "typescript";

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






app.put("/actor/:id", async (req: Request, res: Response) => {
    try {
        await connection("Actor")
        .update({
            salary: req.params.id,
        })
        .where({
            id: req.body.id
        })
    res.status(200).send("Sucesso");
    } catch (err) {
    res.status(400).send({
        message: err,
    });
    }
});






