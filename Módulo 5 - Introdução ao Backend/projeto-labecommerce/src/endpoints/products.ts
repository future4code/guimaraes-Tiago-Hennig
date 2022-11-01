import { Request, Response} from "express"
import connection from "../connection"
import { v4 as generateId } from 'uuid';
import { Product } from "../types";


export async function newProduct(
    req: Request,
    res: Response
): Promise<void> {
    
    const {name, price, image_url} = req.body

    try {
        if (!name || !price || !image_url || (typeof(price) != "number")) {
            res.status(400).send("Something is wrong with the information provided.")
        } else {
            await connection("labecommerce_products")
            .insert({
                id: generateId(),
                name,
                price,
                image_url
            })
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

    const order = req.query.order as string
    const search = req.query.search as string
    let products: Product[]

    if (order) {
        try {
            products = await connection("labecommerce_products")
            .select("*")
            .orderBy("name", order)
            res.status(200).send(products)
        } catch (err) {
            res.status(500).send(err)
        }
    } else if (search) {
        try {
            products = await connection("labecommerce_products")
            .select("*")
            .where("name", "like", `%${search}%`)
            res.status(200).send(products)
        } catch (err) {
            res.status(500).send(err)
        }
    } else {
        try {
            products = await connection("labecommerce_products")
            .select("*")
            res.status(200).send(products)
        } catch (err) {
            res.status(500).send(err)
        }
    }
}