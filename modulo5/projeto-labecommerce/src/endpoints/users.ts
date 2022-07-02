import { Request, Response} from "express"
import connection from "../connection"
import { v4 as generateId } from 'uuid';

// Create new user
export async function newUser(
    req: Request,
    res: Response
): Promise<void> {

    const {name, email, password} = req.body

    try {

        if (!name || !email || !password || !name.length || !email.length || !password.length) {
            res.status(400).send("Please check the informations you gave.")
        } else {
            await connection("labecommerce_users")
            .insert({
                id: generateId(),
                name: name,
                email: email,
                password: password
            })
            res.status(200).send("A new user has been created.").end()
        }

    } catch(err) {
        res.status(500).send(err)
    }

}

// Delete user
export async function deleteUserById(
    req: Request,
    res: Response
): Promise<void> {

    const id = req.body.id

    try {

        if ( !id || !id.length ) {
            res.status(400).send("Please check the id you gave.")
        } else {
            await connection("labecommerce_users")
            .delete()
            .where({
                id: id,
            })
            res.status(200).send("User was deleted.").end()
        }

    } catch(err) {
        res.status(500).send(err)
    }

}


// Get all users
export async function getAllUsers(
    req: Request,
    res: Response
): Promise<void> {

    try {
        const users = await connection("labecommerce_users")
        .select("name")
        res.status(200).send(users)
    } catch (err) {
        res.status(500).send(err)
    }

}



