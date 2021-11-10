let nome
let idade

console.log(typeof nome, typeof idade)

// Foi impresso "undefined undefined" pois as variáveis não foram definidas, ou seja, não receberam valor. //

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")

console.log(typeof nome, typeof idade)

// Foi impresso "string string" pois quando o prompt recebe um valor ele é automaticamente uma String.

console.log("Olá", nome,", você tem", idade,"anos.")

roupaAzul = prompt("Você está usando uma roupa azul hoje?")
console.log("Você está usando uma roupa azul hoje? -", roupaAzul)
bebeuAgua = prompt("Você bebeu água o suficiente hoje?")
console.log("Você bebeu água o suficiente hoje? -", bebeuAgua)
faculdade = prompt("Você já fez algum curso superior?")
console.log("Você já fez algum curso superior? -", faculdade)


let a = 10
let b = 25

x = a
a = b
b = x

console.log("O novo valor de a é:", a)
console.log("O novo valor de b é:", b)

let numA = prompt("Digite um número inteiro.")
let numB = prompt("Digite mais um número inteiro.")

numA = Number(numA)
numB = Number(numB)

console.log("O primeiro número somado ao segundo número resulta em:", numA + numB)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", numA * numB)