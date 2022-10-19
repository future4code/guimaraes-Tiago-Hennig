import { Character, validateCharacter } from "../src"

describe.skip("Exercício 2", ()=> {

    test("(2a)", ()=>{

        const newCharacter: Character = {
            name: "",
            health: 1500,
            defense: 1500,
            strength: 100
        }

        const result = validateCharacter(newCharacter)

        expect(result).toBe(false)
    })

    test("(2b)", ()=> {

        const newCharacter: Character = {
            name: "Max Steel",
            health: 0,
            defense: 1500,
            strength: 100
        }

        const result = validateCharacter(newCharacter)

        expect(result).toBe(false)
    })

    test("(2c)", ()=> {

        const newCharacter: Character = {
            name: "Max Steel",
            health: 1500,
            defense: 1500,
            strength: 0
        }

        const result = validateCharacter(newCharacter)

        expect(result).toBe(false)
    })

    test("(2d)", ()=> {

        const newCharacter: Character = {
            name: "Max Steel",
            health: 1500,
            defense: 0,
            strength: 100
        }

        const result = validateCharacter(newCharacter)

        expect(result).toBe(false)
    })

    test("(2e)", ()=> {

        const newCharacter1: Character = {
            name: "Max Steel",
            health: -1500,
            defense: 1500,
            strength: 100
        }

        const newCharacter2: Character = {
            name: "Max Steel",
            health: 1500,
            defense: -1500,
            strength: 100
        }

        const newCharacter3: Character = {
            name: "Max Steel",
            health: 1500,
            defense: 1500,
            strength: -100
        }

        const result1 = validateCharacter(newCharacter1)
        const result2 = validateCharacter(newCharacter2)
        const result3 = validateCharacter(newCharacter3)

        expect(result1).toBe(false)
        expect(result2).toBe(false)
        expect(result3).toBe(false)
    })

    test("(2f)", ()=>{

        const newCharacter: Character = {
            name: "Max Steel",
            health: 1500,
            defense: 1500,
            strength: 100
        }

        const result = validateCharacter(newCharacter)

        expect(result).toBe(true)
    })

})

describe("Exercício 4", ()=>{

})