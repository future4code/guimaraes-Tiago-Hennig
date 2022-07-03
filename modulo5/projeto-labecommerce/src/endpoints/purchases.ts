import { Request, Response} from "express"
import connection from "../connection"
import { v4 as generateId } from 'uuid';

const getProduct = async(productId: string): Promise <any> => {

    const result = await connection("labecommerce_products")
    .select("name", "price")
    .where("id", "like", `${productId}`)

    return result[0]
}

export async function newPurchase(
    req: Request,
    res: Response
): Promise<void> {

    try {

        const {user_id, product_id, quantity} = req.body

        if (!user_id || !product_id || !quantity || !user_id.length || !product_id.length || (typeof(quantity) != "number")) {
            res.send(400).send("Check the information provided.")
        } else {

            const product = await getProduct(product_id)
        
            const totalPrice = product.price * quantity
    
            await connection("labecommerce_purchases")
            .insert({
                id: generateId(),
                user_id: user_id,
                product_id: product_id,
                quantity: quantity,
                total_price: totalPrice
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
        .select("product_id" , "quantity", "total_price")
        .where("user_id", "like", `${user_id}`)

        res.status(200).send(purchases)

    } catch (err) {
        res.status(500).send(err)
    }

}