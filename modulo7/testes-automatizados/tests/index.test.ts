import { performPurchase, User } from "../src"

describe("Test", ()=> {

    test("(a) Testing a value smaller than the user's balance", ()=>{
        const tiago = new User("Tiago", 300)

        const result = performPurchase(tiago, 100)

        expect(result?.balance).toBe(200)
        expect(result).toEqual({name:"Tiago", balance: 200})
    })

    test("(b) Testing a value equal to the user's balance", ()=>{
        const tiago = new User("Tiago", 300)

        const result = performPurchase(tiago, 300)

        expect(result?.balance).toBe(0)
        expect(result).toEqual({name:"Tiago", balance: 0})
    })

    test("(c) Testing a value greatter than the user's balance", ()=>{
        const tiago = new User("Tiago", 300)

        const result = performPurchase(tiago, 400)

        expect(result).toBe(undefined)
        expect(result).toBeUndefined()
    })
})
