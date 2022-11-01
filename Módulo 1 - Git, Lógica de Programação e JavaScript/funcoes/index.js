// ----- Exercícios de interpretação de código -----
// 1
//
// a. 10
//    50
//b. O programa até rodaria mas como não foi chamado o console.log então ele não imprime nada.
//
// 2
//
// a. Essa função transforma todas as letras do argumento recebido em letras minúsculas e procura a palavra
// "cenoura" no texto e retorna um booleano de acordo com a presença ou não da palavra no texto. 
// b. i. true
//    ii. true
//    iii. true
//
//
// ----- Exercícios de escrita de código -----
//
// 1
// a.
function sobreMim() {
    console.log("Eu sou Tiago, tenho 27 anos, moro em Canoas e sou estudante.")
}
sobreMim()

// b.
function sobreMimParametros(nome, idade, endereco, profissao) {
    
    console.log("Eu sou " +nome+ ", tenho " +idade+ " anos, moro em " +endereco+ " e sou " +profissao+ ".")
}
sobreMimParametros("Tiago", "27", "Canoas", "estudante")


// 2
// a.
function soma(num1, num2) {
    return (num1 + num2)
}
console.log(soma(5, 10))

// b.
function maior(num1, num2) {
    return (num1 === num2 || num1 > num2)
}
console.log(maior(16, 15))

// c.
function par(num) {
    return( num % 2 == 0)
}
console.log(par(10))

// d.
function string(message) {
    return(console.log(message.toUpperCase()), message.length)
}
console.log(string("Hello World"))


// 3.
let numb1 = Number(prompt("Digite o primeiro número:"))
let numb2 = Number(prompt("Digite o segundo número:"))

function somas(num1, num2) {
    return("Soma: " +(num1 + num2))
}
function subs(num1, num2) {
    return("Diferença: " +(num1 - num2))
}
function mult(num1,num2) {
    return("Multiplicação: " + (num1 * num2))
}
function div(num1,num2) {
    return("Divisão: " +(num1 / num2))
}
console.log("Números inseridos: " +numb1+ " e " +numb2)
console.log(somas(numb1,numb2))
console.log(subs(numb1,numb2))
console.log(mult(numb1,numb2))
console.log(div(numb1,numb2))
