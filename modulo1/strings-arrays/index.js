// ----- Exercícios de interpretação de código -----
// 1
//
// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 4, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9
//
// 2
//
// SUBI NUM ÔNIBUS EM MIRROCOS
//
// ----- Exercícios de escrita de código -----

// 1
let nomeDoUsuario = prompt("Qual seu nome?")
let emailDoUsuario = prompt("Qual seu email?")

console.log("O e-mail " +emailDoUsuario+ " foi cadastrado com sucesso. Seja bem-vinda(o), " +nomeDoUsuario+ "!")

// 2
let comidasFavoritas = ["Sushi", "Pizza", "Abobrinha Recheada", "Massa Alho e Óleo", "Torta de Limão"]

console.log(comidasFavoritas)
console.log("Essas são as minhas comidas preferidas: ", comidasFavoritas)
comidaUsuario = prompt("Qual sua comida favorita?")
comidasFavoritas.splice(1, 1, comidaUsuario)
console.log(comidasFavoritas)

// 3
let listaDeTarefas = []
listaDeTarefas.push(prompt("Digite uma tarefa que você precisa realizar no dia."))
listaDeTarefas.push(prompt("Digite outra tarefa que você precisa realizar no dia."))
listaDeTarefas.push(prompt("Digite outra tarefa que você precisa realizar no dia."))
console.log(listaDeTarefas)
indice = Number(prompt("Digite o índice de uma tarefa já realizada."))
console.log(listaDeTarefas.splice(indice, 1))
console.log(listaDeTarefas)


// Desafio
// 1
let frase = prompt("Digite uma frase:")
console.log(frase.split(" "))
// 2
let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
indice = frutas.indexOf("Abacaxi")
console.log(indice, frutas.length)