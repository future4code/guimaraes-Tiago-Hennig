// Exercício 1

export interface Character {
    name: string
    health: number
    defense: number
    strength: number
}

export const validateCharacter = (character:Character ): boolean => {

    if (character.health <= 0 || (character.defense <= 0  || character.strength <= 0) || !character.name || character.name.length < 2) {
        return false
    }

    return true
}

// Exercício 3

export const performAttack = (attacker: Character, defender: Character, validator: (input: Character)=> boolean) => {

    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid Character")
    }

    if (defender.defense >= attacker.strength) {
        defender.defense = defender.defense - attacker.strength
    } else {
        const healthAttack = defender.defense - attacker.strength
        defender.health = defender.health - healthAttack
    }

    return attacker



}