// ----- Exercícios de interpretação de código -----
// 1
// a. 
// Matheus Nachtergaele
// Virginia Cavendish
// >{canal: 'Globo', horario: '14h'}
//
//
// 2
// a. Primeiro teríamos um erro já que "cachorro" foi declarado duas vezes. 
// Se deletarmos a segunda vez em que "cachorro" é declarado, teremos:
// >{nome: "Juba", idade: 3, raca: "SRD"}
// >{nome: 'Jubo', idade: 3, raca: 'SRD'}
//
//b. A sintaxe dos três pontos declara em um novo objeto as mesmas chaves e 
// valores do objeto citado após estes três pontos.
//
// 3
// a. false
//    undefined
//
// b. O primeiro valor "false" ocorre pois o valor atribuído a "backender" é "false"
//    O segundo valor é "undefined" pois não existe a chave "altura" nem valor atribuído a ela.
//
//
//
// ----- Exercícios de escrita de código -----
// 1.
// a.
const pessoa = {
    nome: "Tiago",
    apelidos: ["Titi", "Tiaguinho", "Potter"]
}

const funcaoApelido = (parametro) => {
    return `Eu sou  ${parametro.nome}, mas pode me chamar de:  ${parametro.apelidos[0]}, ${parametro.apelidos[1]}, ${parametro.apelidos[2]}`
}

console.log(funcaoApelido(pessoa))

// b.
const pessoa2 = {
    ...pessoa,
    apelidos: ["Ti", "Tititi", "Félix"]
}
console.log(funcaoApelido(pessoa2))
//
// 2.
// a.
//
const primeiro = {
    nome: "Rubens",
    idade: 35,
    profissao: "Metalúrgico"
}

const segundo = {
    nome: "Fernando",
    idade: 27,
    profissao: "Enfermeiro"
}

const informacoes = (parametro) => {
    return `${parametro.nome}, ${parametro.nome.length}, ${parametro.idade}, ${parametro.profissao}, ${parametro.profissao.length}`
}

console.log(informacoes(primeiro))
console.log(informacoes(segundo))
