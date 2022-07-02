import { Request, Response} from "express"
import connection from "../connection"
import { v4 as generateId } from 'uuid';


export async function newProduct(
    req: Request,
    res: Response
): Promise<void> {
    
    const {name, price, image_url} = req.body

    try {
        if (!name || !price || !image_url || !name.length || (typeof(price) != "number") || !image_url.length) {
            res.status(400).send("Information in missing.")
        } else {

            await connection("labecommerce_products")
            .insert({
                id: generateId(),
                name: name,
                price: price,
                image_url: image_url
            })
            console.log(typeof(price))
            res.status(200).send("A new product has been registered.")
        }
    } catch (err) {
        res.status(500).send(err)
    }
}


export async function getAllProducts(
    req: Request,
    res: Response
): Promise<void> {

    try {
        const products = await connection("labecommerce_products")
        .select("name", "price")
        res.status(200).send(products)
    } catch (err) {
        res.status(500).send(err)
    }

}