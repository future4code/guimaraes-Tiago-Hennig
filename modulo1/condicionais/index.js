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

// 2

let nome = prompt("Digite seu nome completo:")
let tipoDeJogo = prompt("Digite o tipo de jogo: IN para Internacional e DO para nacional")
let etapaDoJogo = prompt("Digite a etapa do jogo: SF para semi-final / DT para Terceiro Lugar / FI para final")
let categoria = prompt("Escolha uma categoria: 1, 2, 3 ou 4")
let quantidade = Number(prompt("Digite a quantidade de ingressos:"))
const sf1 = 1320
const sf2 = 880
const sf3 = 550
const sf4 = 220
const dt1 = 660
const dt2 = 440
const dt3 = 330
const dt4 = 170
const fi1 = 1980
const fi2 = 1320
const fi3 = 880
const fi4 = 330
const dolar = 4.1

console.log("---Dados da Compra---")
console.log("Nome do cliente:", nome)
if (tipoDeJogo == "DO") {
    console.log("Tipo do jogo: Nacional")
}
if (tipoDeJogo == "IN") {
    console.log("Tipo do jogo: Internacional")
}
if (etapaDoJogo == "SF") {
    console.log("Etapa do jogo: Semi-final")
}
if (etapaDoJogo == "DT") {
    console.log("Etapa do jogo: Decisão de terceiro lugar")
}
if (etapaDoJogo == "FI") {
    console.log("Etapa do jogo: Final")
}
console.log("Categoria:", categoria)
console.log("Quantidade de Ingressos: " +quantidade+ " ingressos")
console.log("---Valores---")
if (tipoDeJogo == "DO") {
    if (etapaDoJogo == "SF") {
        if (categoria == "1") {
        console.log("Valor do ingresso: R$ ", sf1)
        console.log("Valor total: R$ ", (quantidade * sf1))
        }
    }
    if (etapaDoJogo == "SF") {
        if (categoria == "2") {
        console.log("Valor do ingresso: R$ ", sf2)
        console.log("Valor total: R$ ", (quantidade * sf2))
        }
    }
    if (etapaDoJogo == "SF") {
        if (categoria == "3") {
        console.log("Valor do ingresso: R$ ", sf3)
        console.log("Valor total: R$ ", (quantidade * sf3))
        }
    }
    if (etapaDoJogo == "SF") {
        if (categoria == "4") {
        console.log("Valor do ingresso: R$ ", sf4)
        console.log("Valor total: R$ ", (quantidade * sf4))
        }
    }
    if (etapaDoJogo == "DT") {
        if (categoria == "1") {
        console.log("Valor do ingresso: R$ ", dt1)
        console.log("Valor total: R$ ", (quantidade * dt1))
        }
    }
    if (etapaDoJogo == "DT") {
        if (categoria == "2") {
        console.log("Valor do ingresso: R$ ", dt2)
        console.log("Valor total: R$ ", (quantidade * dt2))
        }
    }
    if (etapaDoJogo == "DT") {
        if (categoria == "3") {
        console.log("Valor do ingresso: R$ ", dt3)
        console.log("Valor total: R$ ", (quantidade * dt3))
        }
    }
    if (etapaDoJogo == "DT") {
        if (categoria == "4") {
        console.log("Valor do ingresso: R$ ", dt4)
        console.log("Valor total: R$ ", (quantidade * dt4))
        }
    }
    if (etapaDoJogo == "FI") {
        if (categoria == "1") {
        console.log("Valor do ingresso: R$ ", fi1)
        console.log("Valor total: R$ ", (quantidade * fi1))
        }
    }
    if (etapaDoJogo == "FI") {
        if (categoria == "2") {
        console.log("Valor do ingresso: R$ ", fi2)
        console.log("Valor total: R$ ", (quantidade * fi2))
        }
    }
    if (etapaDoJogo == "FI") {
        if (categoria == "3") {
        console.log("Valor do ingresso: R$ ", fi3)
        console.log("Valor total: R$ ", (quantidade * fi3))
        }
    }
    if (etapaDoJogo == "FI") {
        if (categoria == "4") {
        console.log("Valor do ingresso: R$ ", fi4)
        console.log("Valor total: R$ ", (quantidade * fi4))
        }
    }
}
if (tipoDeJogo == "IN") {
    if (etapaDoJogo == "SF") {
        if (categoria == "1") {
        console.log("Valor do ingresso: US$ ", (sf1 / dolar))
        console.log("Valor total: US$ ", (quantidade * sf1 / dolar))
        }
    }
    if (etapaDoJogo == "SF") {
        if (categoria == "2") {
        console.log("Valor do ingresso: US$ ", (sf2 / dolar))
        console.log("Valor total: US$ ", (quantidade * sf2 / dolar))
        }
    }
    if (etapaDoJogo == "SF") {
        if (categoria == "3") {
        console.log("Valor do ingresso: US$ ", (sf3 / dolar))
        console.log("Valor total: US$ ", (quantidade * sf3 / dolar))
        }
    }
    if (etapaDoJogo == "SF") {
        if (categoria == "4") {
        console.log("Valor do ingresso: US$ ", (sf4 / dolar))
        console.log("Valor total: US$ ", (quantidade * sf4 / dolar))
        }
    }
    if (etapaDoJogo == "DT") {
        if (categoria == "1") {
        console.log("Valor do ingresso: US$ ", (dt1 / dolar))
        console.log("Valor total: US$ ", (quantidade * dt1 / dolar))
        }
    }
    if (etapaDoJogo == "DT") {
        if (categoria == "2") {
        console.log("Valor do ingresso: US$ ", (dt2 / dolar))
        console.log("Valor total: US$ ", (quantidade * dt2 / dolar))
        }
    }
    if (etapaDoJogo == "DT") {
        if (categoria == "3") {
        console.log("Valor do ingresso: US$ ", (dt3 / dolar))
        console.log("Valor total: US$ ", (quantidade * dt3 / dolar))
        }
    }
    if (etapaDoJogo == "DT") {
        if (categoria == "4") {
        console.log("Valor do ingresso: US$ ", (dt4 / dolar))
        console.log("Valor total: US$ ", (quantidade * dt4 / dolar))
        }
    }
    if (etapaDoJogo == "FI") {
        if (categoria == "1") {
        console.log("Valor do ingresso: US$ ", (fi1 / dolar))
        console.log("Valor total: US$ ", (quantidade * fi1 / dolar))
        }
    }
    if (etapaDoJogo == "FI") {
        if (categoria == "2") {
        console.log("Valor do ingresso: US$ ", (fi2 / dolar))
        console.log("Valor total: US$ ", (quantidade * fi2 / dolar))
        }
    }
    if (etapaDoJogo == "FI") {
        if (categoria == "3") {
        console.log("Valor do ingresso: US$ ", (fi3 / dolar))
        console.log("Valor total: US$ ", (quantidade * fi3 / dolar))
        }
    }
    if (etapaDoJogo == "FI") {
        if (categoria == "4") {
        console.log("Valor do ingresso: US$ ", (fi4 / dolar))
        console.log("Valor total: US$ ", (quantidade * fi4 / dolar))
        }
    }
}
