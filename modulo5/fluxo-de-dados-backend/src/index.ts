import { AddressInfo } from "net";
import express, {Express, Response, Request} from 'express'
import cors from 'cors'
import { Product, products } from "./data";

const app: Express = express();

app.use(express.json());
app.use(cors());

//----------------//

// 1
app.get("/test", (req: Request, res: Response) => {
    res.status(200).send("This API is working fine.")
})

// 3 & 7
app.post("/products", (req: Request, res: Response) => {

    const name = req.body.name
    const price = req.body.price

    if ((!price) || (!name)) {
        throw new Error("Price and/or Name cannot be empty.")
    }

    if (typeof name !== "string" ){
        throw new Error('Name must be a string.')
    }

    if (typeof price !== "number") {
        throw new Error('Price must be a number.')
    }

    const id = products.length+1

    const newProduct:Product = {
        id: id.toString(),
        name: name,
        price: price
    }
    products.push(newProduct)

    res.status(200).send(products)

})

// 4
app.get("/products", (req: Request, res: Response) => {
    res.status(200).send(products)
})


// 5
app.put("/products", (req: Request, res: Response) => {
    for (let product of products) {
        if (product.id === req.query.id) {
            product.price = req.body.price
        }
    }
    res.status(200).send(products)
    })

// 6
app.delete("/products", (req: Request, res: Response) => {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === req.query.id) {
                products.splice(i , 1)
            }
        }
        res.status(200).send(products)
})



//----------------//

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});