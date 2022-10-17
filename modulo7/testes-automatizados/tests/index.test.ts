import { Casino, Client, LOCATION, NACIONALITY, performPurchase, User, verifyAge } from "../src"

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


describe.skip("Exercise 3 & 4", ()=>{

    test("(4a)", ()=>{

        const users:Client[] = [{
            name: "Tiago",
            nacionality: NACIONALITY.BRAZILIAN,
            age: 18
        }]

        const casino1:Casino = {
            name: "Ceasar",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino1, users)

        expect(result.brazilians.allowed).toEqual(["Tiago"])

    })

    test("(4b)", ()=>{

        const users:Client[] = [{
            name: "Tiago",
            nacionality: NACIONALITY.AMERICAN,
            age: 18
        }]

        const casino1:Casino = {
            name: "Ceasar",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino1, users)

        expect(result.americans.allowed).toEqual(["Tiago"])

    })

    test("(4c)", ()=>{
        expect.assertions(3)
    const users:Client[] = [
        {
            name:"Tiago",
            nacionality: NACIONALITY.AMERICAN,
            age: 19
        },
        {
            name: "James",
            nacionality: NACIONALITY.BRAZILIAN,
            age: 19
        }
    ]

    const casino1:Casino = {
        name: "Ceasar",
        location: LOCATION.BRAZIL
    }

    const result = verifyAge(casino1, users)

    expect(result).toEqual({
        brazilians: {
            allowed: ["James"],
            unallowed: []
        },
        americans: {
            allowed: ["Tiago"],
            unallowed: []
        }    
    })
    
    expect(result.americans.allowed).toEqual(["Tiago"])
    expect(result.brazilians.allowed).toEqual(["James"])

    })

    test("(4d)", ()=>{

        const users:Client[] = [
            {
                name:"Tiago",
                nacionality: NACIONALITY.AMERICAN,
                age: 21
            },
            {
                name: "James",
                nacionality: NACIONALITY.BRAZILIAN,
                age: 19
            },
            {
                name: "Ruth",
                nacionality: NACIONALITY.AMERICAN,
                age: 21
            },
            {
                name: "Rita",
                nacionality: NACIONALITY.BRAZILIAN,
                age: 19
            }
        ]
    
        const casino1:Casino = {
            name: "Ceasar",
            location: LOCATION.USA
        }

        const result = verifyAge(casino1, users)

        expect(result.americans.allowed).toEqual(["Tiago", "Ruth"])
        expect(result.americans.unallowed).toEqual([])
        expect(result.brazilians.allowed).toEqual([])
        expect(result.brazilians.unallowed).toEqual(["James", "Rita"])
        expect(result).toEqual({
            brazilians: {
                allowed: [],
                unallowed: ["James", "Rita"]
            },
            americans: {
                allowed: ["Tiago", "Ruth"],
                unallowed: []
            }    
        })

    })


})

describe.skip("Exercise 5", ()=>{

    test("(5a)", ()=>{

        const users:Client[] = [{
            name: "Tiago",
            nacionality: NACIONALITY.BRAZILIAN,
            age: 18
        }]

        const casino1:Casino = {
            name: "Ceasar",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino1, users)

        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)

    })

    test("(5b)", ()=>{

        const users:Client[] = [{
            name: "Tiago",
            nacionality: NACIONALITY.AMERICAN,
            age: 18
        }]

        const casino1:Casino = {
            name: "Ceasar",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino1, users)

        expect(result.americans.unallowed.length).toBe(0)

    })

    test("(5c)", ()=>{

        const users:Client[] = [
            {
                name:"Tiago",
                nacionality: NACIONALITY.AMERICAN,
                age: 19
            },
            {
                name: "James",
                nacionality: NACIONALITY.BRAZILIAN,
                age: 19
            },
            {
                name: "Ruth",
                nacionality: NACIONALITY.AMERICAN,
                age: 19
            },
            {
                name: "Rita",
                nacionality: NACIONALITY.BRAZILIAN,
                age: 19
            }
        ]
    
        const casino1:Casino = {
            name: "Ceasar",
            location: LOCATION.USA
        }

        const result = verifyAge(casino1, users)

        expect(result.americans.unallowed).toContain("Tiago")
        expect(result.brazilians.unallowed).toContain("James")

    })


    test("(5d)", ()=>{

        const users:Client[] = [
            {
                name:"Tiago",
                nacionality: NACIONALITY.AMERICAN,
                age: 21
            },
            {
                name: "James",
                nacionality: NACIONALITY.BRAZILIAN,
                age: 19
            },
            {
                name: "Ruth",
                nacionality: NACIONALITY.AMERICAN,
                age: 21
            },
            {
                name: "Rita",
                nacionality: NACIONALITY.BRAZILIAN,
                age: 19
            }
        ]

        const casino1:Casino = {
            name: "Ceasar",
            location: LOCATION.USA
        }

        const result = verifyAge(casino1, users)

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toBe(2)

    })


})