import { Request, Response} from "express"
import connection from "../connection"
import { v4 as generateId } from 'uuid';
import { Users } from "../types";

// Create new user
export async function newUser(
    req: Request,
    res: Response
): Promise<void> {

    const {name, email, password} = req.body

    try {

        if (!name || !email || !password) {
            res.status(400).send("Please check the informations you gave.")
        } else {
            await connection("labecommerce_users")
            .insert({
                id: generateId(),
                name,
                email,
                password
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
    const checkId = await connection("labecommerce_users")
                    .select("id")
                    .where("id", id)
    
    console.log(checkId)

    try {

        if ( !id || !checkId.length  ) {
            res.status(400).send("Please check the id you gave.")
        } else {
            await connection("labecommerce_users")
            .delete()
            .where({
                id,
            })
            res.status(200).send("User was deleted.").end()
        }
    } catch(err) {
        res.status(500).send(err)
    }
}



// Get all users

const selectPurchasesByUser = async (userId: string): Promise<any> => {
    const response = await connection("labecommerce_purchases")
        .select("name","price", "quantity", "total_price","labecommerce_purchases.id",)
        .join("labecommerce_products", "labecommerce_purchases.product_id", "labecommerce_products.id")
        .where("user_id", userId)

    return response
}


const purchasesFor = async (users: any[]): Promise<Users[]> => {
    for (let user of users) {
        user.purchases = await selectPurchasesByUser(user.id)
    }

    return users
}

export const getAllUsers = async(
    req: Request,
    res: Response
): Promise<void> => {

    try {
        const users:Users[] = await connection("labecommerce_users")
        .select("*")
        const purchasesByUser: Users[] = await purchasesFor(users)
        res.status(200).send(purchasesByUser)
    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
    
}



