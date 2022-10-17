import { Client, NACIONALITY, performPurchase, User } from "../src"

describe.skip("Exercise 2", ()=> {

    test("(2a) Testing a value smaller than the user's balance", ()=>{
        const tiago = new User("Tiago", 300)

        const result = performPurchase(tiago, 100)

        expect(result?.balance).toBe(200)
        expect(result).toEqual({name:"Tiago", balance: 200})
    })

    test("(2b) Testing a value equal to the user's balance", ()=>{
        const tiago = new User("Tiago", 300)

        const result = performPurchase(tiago, 300)

        expect(result?.balance).toBe(0)
        expect(result).toEqual({name:"Tiago", balance: 0})
    })

    test("(2c) Testing a value greatter than the user's balance", ()=>{
        const tiago = new User("Tiago", 300)

        const result = performPurchase(tiago, 400)

        expect(result).toBe(undefined)
        expect(result).toBeUndefined()
    })
})


export const clientList:Client[] = [
    {
        name: "Tiago",
        nacionality: NACIONALITY.BRAZILIAN,
        age: 28
    },
    {
        name: "Madonna",
        nacionality: NACIONALITY.AMERICAN,
        age: 64 
    },
    {
        name: "Lady GaGa",
        nacionality: NACIONALITY.AMERICAN,
        age: 32
    },
    {
        name: "Lucas",
        nacionality: NACIONALITY.BRAZILIAN,
        age: 22
    },
    {
        name: "Rodrigo",
        nacionality: NACIONALITY.BRAZILIAN,
        age: 25
    },
    {
        name: "James",
        nacionality: NACIONALITY.AMERICAN,
        age: 30
    },
    {
        name: "Guilherme",
        nacionality: NACIONALITY.BRAZILIAN,
        age: 26
    },
    {
        name: "Jonathan",
        nacionality: NACIONALITY.AMERICAN,
        age: 35
    },
    {
        name: "Rick",
        nacionality: NACIONALITY.AMERICAN,
        age: 50
    }
]

describe("Exercise 3", ()=>{

    test("(3a)")
})