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

// 3 
app.post("/products", (req: Request, res: Response) => {

    const newProduct:Product = {
        id: Math.random().toString(),
        name: req.body.name,
        price: req.body.price
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