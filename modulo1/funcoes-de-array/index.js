// ----- Exercícios de interpretação de código -----
//
// 1.
// a. Será impresso tudo o que a função novoArray pede. Serão impressos três arrays. Em cada array um dos parâmetros "item",
// cada um acompanhado de sua posição no índice do array, e também o conteúdo todo do array original. 
// 
// 2.
// a. Será impresso um novo array, somente com os valores das chaves "nome".
//
// 3.
// a. Será impresso um novo array, com dois objetos.
// Porém somente estarão neste novo array os objetos que não contém o valor "Chijo" na chave "apelido"
//
//
//
// ----- Exercícios de escrita de código -----
//
//
// 1.

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

// a. 

const nomes = (elemento, indice, array) => {
    return elemento.nome
}
const nomeDosPets = pets.map(nomes)
console.log(nomeDosPets)

// b.

const racas = pets.filter((racinha, indice, array) => {
    return racinha.raca === "Salsicha"
})

console.log(racas)

// c.

const desconto = pets.filter((tipo, indice, array) => {
    
    return tipo.raca === "Poodle"
})



// 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a.







