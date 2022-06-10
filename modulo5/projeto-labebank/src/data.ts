export type Client = {
    name: string,
    cpf: string,
    date_of_birth: string,
    balance: number,
    bank_statement:Transaction[]
}

export type Transaction = {
    date: number,
    amount: number,
    description: string
}

export let clients:Client[] = [
    {
        name: "Jack Dawson",
        cpf: "33041288054",
        date_of_birth: "10/01/1890",
        balance: 20,
        bank_statement: []
    },
    {
        name: "Rose DeWitt Bukater",
        cpf: "55422588930",
        date_of_birth: "12/01/1895",
        balance: 240000,
        bank_statement: []
    },
    {
        name: "Caledon Hockley",
        cpf: "11044011487",
        date_of_birth: "15/03/1882",
        balance: 45000700,
        bank_statement: []
    },
    {
        name: "Margaret Brown",
        cpf: "22558741368",
        date_of_birth: "02/08/1871",
        balance: 11000000,
        bank_statement: []
    },
    {
        name: "Thomas Andrews",
        cpf: "11035821490",
        date_of_birth: "11/11/1860",
        balance: 1200000,
        bank_statement: []
    }
]