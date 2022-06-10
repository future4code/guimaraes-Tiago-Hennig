import { AddressInfo } from "net";
import express, {Express} from 'express'
import cors from 'cors'
import { Client, clients } from "./data";

const app: Express = express();

app.use(express.json());
app.use(cors());

//----------------//


const data = new Date()
const day = String(data.getDate()).padStart(2, '0')
const month = String(data.getMonth() + 1).padStart(2, '0')
const year = data.getFullYear()
const today = day + '/' + month + '/' + year
console.log(today)

// Get users

app.get('/users', (req, res) => {
    res.status(200).send(clients)
})


// Create an account

app.post('/users', (req, res) => {

    const name = req.body.name
    const cpf = req.body.cpf
    const date_of_birth = req.body.date_of_birth
    const yearBirthSplit:string = date_of_birth.split('/')
    const dayBirth = Number(yearBirthSplit[0])
    const monthBirth = Number(yearBirthSplit[1])
    const yearBirth = Number(yearBirthSplit[2])
    let idade:number = year - yearBirth

    if (idade === 18) {
        if(Number(month) < monthBirth ) {
            throw new Error("You must be at least 18 to open an account.")
        } else {
            if (Number(day) < dayBirth) {
                throw new Error("You must be at least 18 to open an account.")
            } else {
                    for (let client of clients) {
                        if (client.cpf === req.body.cpf) {
                            throw new Error("The provided CPF already exists in another registration. Please check your documents.")
                        }
                    }
                    const newAccount:Client = {
                        name: name,
                        cpf: cpf,
                        date_of_birth: date_of_birth,
                        balance: 0,
                        bank_statement: []
                    }
                
                    clients.push(newAccount)

            }
        }

    } else if (idade < 18) {
        throw new Error("You must be at least 18 to open an account.")
    } else {
        for (let client of clients) {
            if (client.cpf === req.body.cpf) {
                throw new Error("The provided CPF already exists in another registration. Please check your documents.")
            }
        }
    
        const newAccount:Client = {
            name: name,
            cpf: cpf,
            date_of_birth: date_of_birth,
            balance: 0,
            bank_statement: []
        }
        clients.push(newAccount)
    }
    res.status(200).send(clients)
})


// Check balance

app.get("/myaccount" , (req, res) => {

    const name = req.headers.name
    const cpf = req.headers.cpf

        if (!name) {
            throw new Error("Please check the name entered.")
    }
        if (!cpf) {
            throw new Error("Please check the CPF entered.")
    }

        const indexBalance = clients.findIndex(client => client.name === name && client.cpf === cpf)

        try {

            res.status(200).send(`${clients[indexBalance].name}, your balance is: ${clients[indexBalance].balance} dollars.`)       
        
        }catch(error) {
            throw new Error("Something is wrong. Please call your account manager.")
    }

})

// Cash deposit

app.put("/myaccount", (req, res) => {

    const name : string = req.body.name
    const cpf : string = req.body.cpf
    const cash : number = req.body.cash

    if (!name) {
        throw new Error("Please check the name entered.")
}
    if (!cpf) {
        throw new Error("Please check the CPF entered.")
}
    if (!cash) {
    throw new Error("Please check the cash amount entered.")
}

    const indexDeposit = clients.findIndex(client => client.name === name && client.cpf === cpf)
    console.log(indexDeposit)
    try {
        if (indexDeposit != -1)
                clients[indexDeposit].balance = clients[indexDeposit].balance + cash
                res.status(200).send(`${clients[indexDeposit].name}, you have deposited ${cash} dollars. Your current  ${clients[indexDeposit].balance}`)
    }catch(error) {
    throw new Error("Something is wrong. Please call your account manager.")
}
})


// Pay bills

// app.post('/myaccount/paybill' , (req, res) => {

    

// })

//----------------//

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});