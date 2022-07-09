import { Request, Response} from "express"
import connection from "../connection"
import { v4 as generateId } from 'uuid';
import { Product } from "../types";

const getProduct = async(productId: string): Promise <any> => {

    const result = await connection("labecommerce_products")
    .select("name", "price")
    .where("id", "like", `${productId}`)

    return result
}


export async function newPurchase(
    req: Request,
    res: Response
): Promise<void> {

    try {

        const {user_id, product_id, quantity} = req.body

        if (!user_id || !product_id || !quantity || (typeof(quantity) != "number")) {
            res.send(400).send("Check the information provided.")
        } else {

            const product = await getProduct(product_id)
        
            const total_price = product[0].price * quantity
    
            await connection("labecommerce_purchases")
            .insert({
                id: generateId(),
                user_id,
                product_id,
                quantity,
                total_price
            })
            res.status(200).send("A new purchase has been registered.")
        }

    } catch (err) {
        res.send(err)
    }
}


export async function purchasesByUser(
    req: Request,
    res: Response
): Promise<void> {

    try {
        const user_id = req.params.user_id

        const purchases = await connection("labecommerce_purchases")
        .join("labecommerce_users", "labecommerce_users.id","labecommerce_purchases.user_id")
        .join("labecommerce_products", 'labecommerce_products.id', "labecommerce_purchases.product_id")
        .select("labecommerce_users.id","labecommerce_users.name","labecommerce_users.email",
        "labecommerce_products.name", "labecommerce_products.price", "labecommerce_products.image_url",
        "labecommerce_purchases.quantity", "labecommerce_purchases.total_price")
        .where({"labecommerce_users.id": user_id})

        res.status(200).send(purchases)

    } catch (err) {
        res.status(500).send(err)
    }
}
