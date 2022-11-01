// Exercício 1

const name = process.argv[2]
const idade = Number(process.argv[3])
const futuro = idade + 7


console.log(`Olá, ${name}! Você tem ${idade} anos. Em sete anos você terá ${futuro}.`)