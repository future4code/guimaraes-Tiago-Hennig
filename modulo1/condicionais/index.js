// ----- Exercícios de interpretação de código -----
//
// 1.
// a. O programa recebe do usuário um número no formato de String, depois converte essa String em
// número. Depois um código de condicional analisa se o número que o usuário digitou é inteiramente
// divisível por 2. Se o número ao ser dividido por 2 e não restar nada o programa imprime "Passou 
// no teste.". Se o número digitado ao ser dividido por 2 e restar 1, então o programa imprime "Não passou
// no teste.".
//
// b. O programa imprime "Passou no teste." para os números pares digitados pelo usuário.
//
// c. O programa imprime "Não passou no teste" para os números ímpares digitados pelo usuário.
//
// 2
// a. O programa acima serve para imprimir uma mensagem com o valor de uma fruta de acordo com a fruta escolhida pelo usuário.
//
// b. O preço da fruta Maçã é R$ 2.25.
//
// c. O preço da fruta Pêra é R$ 5.
//
// 3.
// a. A primeira linha está pedindo ao usuário que digite um número, e nessa mesma linha o programa está convertendo
// o número recebido em string para número.
// 
// b. Se digitado o número 10, a mensagem seria "Esse número passou no teste". Se digitado -10, não apareceria nenhuma mensagem.
//
// c. Haverá erro sim. A ultima linha pede pede para imprimir uma variável que está dentro da condicional. Essa variável só existe dentro
// da condicional. Não é possível acessá-la depois que a condicional estiver fechada, pois ela faz parte somente do escopo da condicional.
// 
//
// ----- Exercícios de escrita de código
//

// 1.

const idade = Number(prompt("Qual sua idade?"))

if (idade >= 18) {
    console.log("Você pode dirigir")
}else if (idade < 18) {
    console.log("Você não pode dirigir.")
}

// 2.

const turno = prompt("Selecione seu turno de estudo: M, V ou N")

if (turno == "M") {
    console.log("Bom Dia!")
} else if (turno == "V") {
    console.log("Boa Tarde!")
} else if (turno == "N") {
    console.log("Boa Noite!")
}

// 3

let turnoAula = prompt("Selecione seu turno de estudo: M, V ou N")

switch (turnoAula){
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
}

// 4

let genero = prompt("Qual o gênero do filme escolhido?")
let ingresso = Number(prompt("Qual o valor do ingresso?"))

if ((genero = "fantasia") && (ingresso < 15)) {
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}

// Desafio

// 1

let generoFilme = prompt("Qual o gênero do filme escolhido?")
let ingressoFilme = Number(prompt("Qual o valor do ingresso?"))

if ((generoFilme = "fantasia") && (ingressoFilme < 15)) {
    let lanche = prompt("Qual lanche você vai querer para comer na sua sessão?")
    console.log("Bom filme! Aproveite o seu/sua", lanche)
}else{
    console.log("Escolha outro filme :(")
}

