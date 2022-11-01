// ----- Exercícios de interpretação de código -----
//
// 1
// a. false
// b. false 
// c.  true
// d. boolean
//
// 2
// Provavelmente o colega quer somar dois números, mas como os números estão sendo recebidos via prompt e ele não está convertendo eles de string pra número, então
// está acontecendo apenas concatenação de duas strings.
// Se for digitado "1" em primeiroNumero e "2" em segundoNumero, o resultado será: "12"
// 
// 3
// let primeiroNumero = Number(prompt("Digite um número!"))
// let segundoNumero = Number(prompt("Digite outro número!"))
// const soma = primeiroNumero + segundoNumero
// console.log(soma)
//
// ----- Exercícios de escrita de código -----
//
// 1
let idadeUsuario = prompt("Digite sua idade:")
let idadeAmigo = prompt("Digite o nome de seu(sua) melhor amigo(a):")
let comparar = idadeUsuario > idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?", comparar)
console.log("A diferença idade entre você e seu amigo(a) é de " + (idadeAmigo - idadeUsuario) + " anos.")
//
//2
let numeroPar = Number(prompt("Digite um número par:"))
let resto = numeroPar % 2
console.log("O resto da divisão do número digitado pelo número 2 é:", resto) // com número pares o resultado sempre é 0, com número ímpar o resultado sempre é 1.
//
// 3
let idadeUsuarioAnos = Number(prompt("Digite quantos anos você tem:"))
let idadeUsuarioMeses = idadeUsuarioAnos * 12
let idadeUsuarioDias = idadeUsuarioAnos * 365
let idadeUsuarioHoras = idadeUsuarioDias * 24
console.log("A idade do usuário em meses é:", idadeUsuarioMeses)
console.log("A idade do usuário em dias é:", idadeUsuarioDias)
console.log("A idade do usuário em horas é:", idadeUsuarioHoras)
//
// 4
let primeiroNumero = Number(prompt("Digite um número:"))
let segundoNumero = Number(prompt("Digite outro número:"))
console.log("O primeiro número é maior que o segundo?", (primeiroNumero > segundoNumero))
console.log("O primeiro número é igual ao segundo?", (primeiroNumero === segundoNumero))
console.log("O primeiro número é divisível pelo segundo?", ((primeiroNumero % segundoNumero) === 0))
console.log("O segundo número é divisível pelo primeiro?", ((segundoNumero % primeiroNumero) === 0))

