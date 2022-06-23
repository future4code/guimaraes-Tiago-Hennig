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


2) Endpoints

a) app.put("/test", async (req, res) => {

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

b) app.put("/test", async (req, res) => {

    try {
        await connection("Actor")
        .delete()
        .where({
            id: req.body.id
        });
        res.send("Sucesso!")
    } catch(e) {
        res.send(e)
    }
    
})

c) app.get("/test", async (req, res) => {
    const actorGender:string = req.body.gender
    try {
        const result = await connection.raw(`
            SELECT AVG(salary) FROM Actor WHERE gender = '${actorGender}'
        `)
        res.send(result[0])
    } catch(e) {
        res.send(e)
    }
})


2) Query entries

a) const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
    .update({
        salary: salary,
    })
    .where("id", id);
};

b) const deleteActor = async (id: string): Promise<any> => {
    await connection("Actor")
    .delete()
    .where("id", id);
};

c) const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    console.log(result[0].average);
  };



3)

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

`