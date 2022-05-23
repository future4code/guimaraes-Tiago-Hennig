// Exercício 2

const num1 = Number(process.argv[2])
const num2 = Number(process.argv[3])
const operacao = process.argv[4]

const mult = num1 * num2
const sum = num1 + num2
const sub = num1 - num2
const div = num1 / num2

switch(operacao.toLowerCase()) {
    case "mult":
        console.log(mult)
    break;
    case "sub":
        console.log(sub)
    break;
    case "sum" :
        console.log(sum)
    break;
    case "div":
        console.log(div)
    break;
}