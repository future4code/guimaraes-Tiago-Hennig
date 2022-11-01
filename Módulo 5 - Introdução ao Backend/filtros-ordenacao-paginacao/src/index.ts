import connection from "./connection";
import app from "./app";
import { Request, Response } from "express"
import { getUserByType_ex1B, getUsers_ex1A, getUsersAndOrder_ex2, GetUsersLimit_ex3 } from "./endpoints/endpoints";


// 1

// a

app.get("/users/", getUsers_ex1A)

// b

app.get("/users/:type", getUserByType_ex1B)



// 2

app.get("/users/", getUsersAndOrder_ex2)



// 3


app.get("/users/", GetUsersLimit_ex3)



// 4

