// Exercício 1
// a)

// let minhaString :string = 10     // Ocorre um erro: Type 'number' is not assignable to type 'string'.ts(2322)


// b)

// let meuNumero :number | string = "Dez"  //  Utiliza-se o Union Type para que a variavel possa ter mais de um tipo de dado.


// c)

// type pessoa = {
//     nome :string,
//     idade : number,
//     corFavorita :string
// }

// const usuario1 :pessoa = {
//     nome: "Amanda",
//     idade: 30,
//     corFavorita: "Azul"
// }

// const usuario2 :pessoa = {
//     nome: "Tiago",
//     idade: 28,
//     corFavorita: "Azul Royal"
// }

// const usuario3 :pessoa = {
//     nome: "Beth",
//     idade: 59,
//     corFavorita: "Verde"
// }

// console.log(usuario1)
// console.log(usuario2)
// console.log(usuario3)


// d)



// type pessoa = {
//     nome :string,
//     idade : number,
//     corFavorita :string
// }

// enum corFavorita {
//     AZUL = "Azul",
//     VERDE = "Verde",
//     AMARELO = "Amarelo",
//     LARANJA = "Laranja",
//     VERMELHO = "Vermelho",
//     ROXO = "Roxo"
// }

// const usuario1 :pessoa = {
//     nome: "Amanda",
//     idade: 30,
//     corFavorita: corFavorita.AZUL
// }

// const usuario2 :pessoa = {
//     nome: "Tiago",
//     idade: 28,
//     corFavorita: corFavorita.AZUL
// }

// const usuario3 :pessoa = {
//     nome: "Beth",
//     idade: 59,
//     corFavorita: corFavorita.VERDE
// }

// console.log(usuario1)
// console.log(usuario2)
// console.log(usuario3)