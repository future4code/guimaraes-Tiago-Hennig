// Exercise 1 & 2

export class User {
    public name
    public balance
    constructor(name: string, balance: number) {
        this.name = name;
        this.balance = balance;
    }
}

export const performPurchase = (user: User, value: number): User | undefined => {

    if (value > user.balance) {
        return undefined
    }

    user.balance -= value

    return user
}

// Exercise 3

export enum LOCATION {
    USA = "USA",
    BRAZIL = "BRAZIL"
}

export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN"
}

export interface Client {
    name: string,
    nacionality: NACIONALITY,
    age: number
}

export class Casino {
    public name
    public location
    constructor(name: string, location: LOCATION) {
        this.name = name
        this.location = location
    }
}

interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}

interface ResultItem {
    allowed: string[];
    unallowed: string[];
}

export const verifyAge = (casino:Casino, users: Client[]): Result => {

    const allowed: Client[] = []
    const unallowed: Client[] = []

    if ( (casino.location != "USA") && (casino.location != "BRAZIL") ) {
        throw new Error("Casinos must be located in Brazil or in the USA.")
    }

    for (const user of users) {
        if (casino.location == "USA") {
            if (user.age < 21) {
                unallowed.push(user)
            } else {
                allowed.push(user)
            }
        }
        if (casino.location == "BRAZIL") {
            if (user.age < 18) {
                unallowed.push(user)
            } else {
                allowed.push(user)
            }
        }
    }

    return {
        brazilians: {
            allowed: allowed.filter((client)=> client.nacionality == "BRAZILIAN")
            .map((clientFilter)=> clientFilter.name),
            unallowed: unallowed.filter((client)=> client.nacionality == "BRAZILIAN")
            .map((clientFilter)=> clientFilter.name)
        },
        americans: {
            allowed: allowed.filter((client)=> client.nacionality == "AMERICAN")
            .map((clientFilter)=> clientFilter.name),
            unallowed: unallowed.filter((client)=> client.nacionality == "AMERICAN")
            .map((clientFilter)=> clientFilter.name)
        }
    }

}

