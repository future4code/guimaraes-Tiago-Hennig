import { Transaction } from "./Transaction";

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(cpf: string, name: string, age: number) {
    this.cpf = cpf;
    this.name = name;
    this.age = age;
    }

    getCpf():string {
        return this.cpf
    }

    getName():string {
        return this.name
    }

    getAge():number {
        return this.age
    }

    setCpf(newCpf:string) {
        this.cpf = newCpf
    }

    setName(newName:string) {
        this.name = newName
    }

    setAge(newAge:number) {
        this.age = newAge
    }

    setTransaction (newTransaction: Transaction) {
        this.transactions.push(newTransaction)
    }
}