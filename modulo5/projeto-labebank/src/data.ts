export type Client = {
    name: string,
    cpf: string,
    age: number,
    balance: number,
    bank_statement:Bank_statement[]
}

export type Bank_statement = {
    date: number,
    amount: number,
    description: string
}

export const clients:Client[] = [
    {
        name: "Jack Dawson",
        cpf: "33041288054",
        age: 20,
        balance: 20,
        bank_statement: []
    },
    {
        name: "Rose DeWitt Bukater",
        cpf: "55422588930",
        age: 18,
        balance: 240000,
        bank_statement: []
    },
    {
        name: "Caledon Hockley",
        cpf: "11044011487",
        age: 33,
        balance: 45000700,
        bank_statement: []
    },
    {
        name: "Margaret Brown",
        cpf: "22558741368",
        age: 40,
        balance: 11000000,
        bank_statement: []
    },
    {
        name: "Thomas Andrews",
        cpf: "11035821490",
        age: 55,
        balance: 1200000,
        bank_statement: []
    }
]