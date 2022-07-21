import connection from "./connection";
import app from "./app";
import { Request, Response } from "express"
import { v4 as generateId } from 'uuid';

// 1- New user

app.post("/user", async (req, res) => {

    const {name, nickname, email} = req.body

    try {
        if (!name || !nickname || !email || name?.length == 0 || nickname?.length == 0 || email?.length == 0) {
            res.status(400).send("Name, Nickname and Email must be entered.")
        } else {
            await connection("TodoListUser")
            .insert({
            id: generateId(),
            name: name,
            nickname: nickname,
            email: email
        })
            res.status(200).send("A new user was created!")
            } 
    }catch (error) {
        res.status(500).send("Something went wrong :(")
    }
    
})


// 2- Get user by id // 6- Get all users

app.get("/user/:id", async (req, res) => {

    const id = req.params.id
// 6
    if (id === "all") {
        try {
            const result = await connection.raw(`
            SELECT name, nickname FROM TodoListUser
            `)
                res.status(200).send(result[0])
        } catch (err) {
            res.status(500).send("Something went wrong :( ")
        }
    } else {
// 2
    try {
        const result = await connection.raw(`
        SELECT name, nickname FROM TodoListUser WHERE id = '${id}'
        `)
        if (!result[0].length) {
            res.status(400).send("User not found.")
        } else {
            res.status(200).send(result[0])
        }

    } catch (err) {
        res.status(500).send("Something went wrong :( ")
    }
    }
})

// 3- User edit

app.put("/user/edit/:id", async (req, res) => {

    const id = req.params.id
    const {name, nickname, email} = req.body

    if (name?.length == 0 || nickname?.length == 0 || email?.length == 0) {
        res.status(400).send("Values cannot be empty. Check the information you're trying to change.")
    } else {

        try {
            await connection("TodoListUser")
            .update({
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email
            })
            .where({
                id: id
            })
        
            res.status(200).send("User updated.")
        } catch (error) {
            res.status(500).send(error)
        }}
    
})

// 4- Create a new task

app.post("/task", async (req, res) => {

    const {status, title, description, limit_date, creator_user_id} = req.body

    if (title?.length == 0 || !title || description?.length == 0 || !description || limit_date?.length == 0 ||
        !limit_date || creator_user_id?.length == 0 || !creator_user_id || status?.length == 0) {
        res.status(400).send("Values cannot be empty and you must give all the information about the task you are creating. Check the information you're trying to change.")
    } else {
    try {
        await connection("TodoListTask")
        .insert({
            id: generateId(),
            title: title,
            description: description,
            limit_date: limit_date,
            creator_user_id: creator_user_id,
            status: status
        })

        res.status(200).send("A new task was created!")
    } catch (error) {
        res.status(500).send(error)
    }
    }
})

// 5- Get task by id

app.get("/task/:id", async (req, res) => {

    const id = req.params.id

    try {
        const result = await connection.raw(`
        SELECT * FROM TodoListTask WHERE id = '${id}'
        `)
        if (!result[0].length) {
            res.status(400).send("Task not found.")
        } else {
            res.status(200).send(result[0])
        }

    } catch (err) {
        res.status(500).send("Something went wrong :(")
    }

})

// Tables created:
//  // TodoListUser
//  // TodoListTask
//  // TodoListResponsibleUserTaskRelation