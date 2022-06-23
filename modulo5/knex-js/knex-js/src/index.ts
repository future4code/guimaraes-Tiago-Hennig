import connection from "./connection";
import app from "./app";
import { Request, Response } from "express"

app.put("/test", async (req, res) => {

    try {
        await connection("Actor")
        .update({
            salary: req.body.newSalary
        })
        .where({
            id: req.body.id
        });
        res.send("Sucesso!")
    } catch(e) {
        res.send(e)
    }

})

app.get("/test", async (req, res) => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor
        `)
        res.send(result[0])
    } catch(e) {
        res.send(e)
    }
})

