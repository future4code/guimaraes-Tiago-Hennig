import { Request, Response} from "express"
import connection from "../connection"


export async function getUsers_ex1A(
    req: Request,
    res: Response
): Promise<void> {

    let name = req.query.name

    if (!name) {
        name = ""
    }

    try {
        const result = await connection.raw(`
    SELECT id, name, email, type
    FROM aula48_exercicio WHERE name LIKE '%${name}%'
    `)

    res.status(200).send(result[0])
    } catch (err) {
        res.send(err)
    }

}

export async function getUserByType_ex1B(
    req: Request,
    res: Response
): Promise<void> {

    let type = req.params.type

    if (!type) {
        type = ""
    }

    try {
        const result = await connection.raw(`
    SELECT id, name, email, type
    FROM aula48_exercicio WHERE type LIKE '%${type}%'
    `)

    res.status(200).send(result[0])
    } catch (err) {
        res.send(err)
    }
}


export async function getUsersAndOrder_ex2(
    req: Request,
    res: Response
): Promise<void>  {

    let order_by = req.query.order_by

    if (!order_by) {
        order_by = "email"
    }

    try {
        const result = await connection.raw(`
    SELECT id, name, email, type
    FROM aula48_exercicio ORDER BY ${order_by} ASC
    `)

    res.status(200).send(result[0])
    } catch (err) {
        res.send(err)
    }

}


export async function GetUsersLimit_ex3(
    req: Request,
    res: Response
): Promise<void> {

    let page = Number(req.query.page)
    let size = 5
    if(isNaN(page) || page <1){
        page = 1
    }

    let offset = size*(page-1)

    try {
        const result = await connection.raw(`
    SELECT id, name, email, type
    FROM aula48_exercicio LIMIT 5
    OFFSET ${offset}
    `)

    res.status(200).send(result[0])
    } catch (err) {
        res.send(err)
    }
}


export async function ex_4_getUsers(
    req: Request,
    res: Response
): Promise<void> {
    
    let page = Number(req.query.page)
    let size = Number(req.query.size)
    let name = req.query.name

    if (!name) {
        name = ""
    }

    let offset = size*(page-1)

    try {
        const result = await connection.raw(`
    SELECT id, name, email, type
    FROM aula48_exercicio WHERE name LIKE '%${name}%
    LIMIT 5 OFFSET ${offset}
    `)

    res.status(200).send(result[0])
    } catch (err) {
        res.send(err)
    }


}