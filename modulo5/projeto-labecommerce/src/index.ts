import connection from "./connection";
import app from "./app";
import { Request, Response } from "express"
import { deleteUserById, getAllUsers, newUser } from "./endpoints/users";
import { getAllProducts, newProduct } from "./endpoints/products";


app.post("/users", newUser)
app.delete("/users", deleteUserById)
app.get("/users", getAllUsers)

app.post("/products", newProduct)
app.get("/products", getAllProducts)