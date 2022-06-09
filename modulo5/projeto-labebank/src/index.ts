import { AddressInfo } from "net";
import express, {Express} from 'express'
import cors from 'cors'
import { Client, clients } from "./data";

const app: Express = express();

app.use(express.json());
app.use(cors());

//----------------//

// Create an account

app.post('/openaccount', (req, res) => {

    const name = req.body.name
    const cpf = req.body.cpf
    const age = req.body.age

    try {
    if (age < 18) {
        throw new Error("You must be at least 18 to open an account.")
    }

    for (let client of clients) {
        if (client.cpf === req.body.cpf) {
            throw new Error("The provided CPF already exists in another registration. Please check your documents.")
        }
    }

    const newAccount:Client = {
        name: name,
        cpf: cpf,
        age: age,
        balance: 0,
        bank_statement: []
    }

    clients.push(newAccount)

    }catch(error) {
    res.send("Something went wrong. Call you account manager for more information.")
}

    res.status(200).send(clients)

})


// Acessing the balance

app.get("/myaccount/balance" , (req, res) => {

    const name = req.query.name
    const cpf = req.query.cpf

        if (!name) {
            throw new Error("Please check the name entered.")
    }
        if (!cpf) {
            throw new Error("Please check the CPF entered.")
    }

        const filteredClient = clients.filter(client => client.name === req.query.name && client.cpf === req.query.cpf)
        console.log(filteredClient)
        if (!filteredClient.length) {
            throw new Error("Something is wrong. Please check the name and/or CPF entered.")
        }
        try {
            for (let client of filteredClient) {
                if (client.name == req.query.name && client.cpf == req.query.cpf) {
                    res.status(200).send(`${client.name}, your balance is: ${client.balance} dollars.`)       
                }
            }  
    }catch(error) {
        throw new Error("Something is wrong. Please call your account manager.")
    }

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