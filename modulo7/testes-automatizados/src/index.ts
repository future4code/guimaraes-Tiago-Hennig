export class User {
    public name
    public balance
    constructor(name:string, balance:number) {
        this.name = name;
        this.balance = balance;
}}

export const performPurchase = (user:User, value: number): User | undefined => {

    if (value > user.balance) {
        return undefined
    }

    user.balance -= value

    return user
}