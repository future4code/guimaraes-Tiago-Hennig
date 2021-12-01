// ----- Exercícios de interpretação de código -----
//
// 1. A cada repetição a variável "i" incrementa +1. E a cada repetição a variável "valor" 
// se soma com o "i". Na última repetição a variável "i" é 4 e a variável "valor" já é 6.
// Ao somar as duas o resultado é 10.
// O resultado no console será:
// 10
// 
// 2.
//
// a.O que vai ser impresso no console?
// 19
// 21
// 23
// 25
// 27
// 30
// 
// b. Sim, é suficiente.
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
// 	console.log(numero)
// }
//
// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// *
// **
// ***
// ****
// 
//
// ----- Exercícios de escrita de código -----
//
//
// 1.

let animais = Number(prompt("Quanto animais de estimação você tem?"))
bichos = []

if (animais == 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else if (animais > 0) {
    for (pet = 0; pet < animais; pet++) {
        let bicho = bichos.push(prompt("Qual o nome de cada um dos seus pets?"))
    }
    console.log(bichos)
}

// 2.

const arrayOriginal = [10, 25, 30, 45, 50, 65, 70, 85, 91, 100]

// a.

function mostraValor (valor) {
    for (let numeros of valor) {
    console.log(numeros)
    }
}
mostraValor(arrayOriginal)

// b.

let mostraValoresDivididos = (valores) => {
    let tamanhoArray = valores.length
    let incremento = (tamanhoArray - 1)
    while (incremento < tamanhoArray) {
        for (let numeros of valores) {
            let dividido = (numeros / 10)
            console.log(dividido)
        }
    incremento++
    }
}
mostraValoresDivididos(arrayOriginal)

// c.

function numerosPares(value) {
    let novoArray = []
    for (let numeros of value) {
        if ((numeros % 2) == 0) {
            novoArray.push(numeros)
        }
    }
    console.log(novoArray)
}
numerosPares(arrayOriginal)

// d.

function arrayComStrings(values) {
    let newArray = []
    let indice = 0
    for (let numeros of values) {
        newArray.push("O elemento do índex " +indice+ " é " +numeros)
        indice++
    }
    console.log(newArray)
}

arrayComStrings(arrayOriginal)

// e.

