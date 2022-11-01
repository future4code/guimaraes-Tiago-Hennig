// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let alturaRet = Number(prompt("Digite a altura"))
  let larguraRet = Number(prompt("Digite a largura"))

console.log(alturaRet * larguraRet)

}

// EXERCÍCIO 02
function imprimeIdade() {
  anoAtual = Number(prompt("Qual o ano atual?"))
  AnoNascimento = Number(prompt("Qual o ano do seu nascimento?"))

console.log(anoAtual - AnoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  return (peso / (altura * altura))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual seu nome?")
  let idade = prompt("Qual sua idade?")
  let email = prompt("Qual seu email?")

console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cores = []
  let cor1 = cores.push(prompt("Digite sua primeira cor favorita"))
  let cor2 = cores.push(prompt("Digite sua segunda cor favorita"))
  let cor3 = cores.push(prompt("Digite sua terceira cor favorita"))

console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
return(string.toUpperCase())
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return (custo / valorIngresso)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return (string1 > string2)

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
// Impossível fazer esse exercício sem copiar o código de um site. Não consegui fazer esse sozinho.
[array[0], array[array.length - 1]] = [array[array.length - 1], array[0]]
return (array)
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // separando
a = string1.toUpperCase()
b = string2.toUpperCase()
return ( a === b )
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}