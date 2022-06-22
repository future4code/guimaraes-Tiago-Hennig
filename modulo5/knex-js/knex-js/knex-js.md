`
1)
a) Ele devolve pra gente o resultado da query e outras informações. As informações vem todas cruas direto do banco.

b) app.get("/test", async (req, res) => {
    const actorName:string = req.body.name
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = '${actorName}'
        `)
        res.send(result[0])
    } catch(e) {
        res.send(e)
    }
})

c) app.get("/test", async (req, res) => {
    const actorGender:string = req.body.gender
    try {
        const result = await connection.raw(`
            SELECT COUNT(*) FROM Actor WHERE gender = '${actorGender}'
        `)
        res.send(result[0][0])
    } catch(e) {
        res.send(e)
    }
})






`