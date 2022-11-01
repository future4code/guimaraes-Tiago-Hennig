```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let numeros = arrayDeNumeros.filter((numero) => {
  return numero === numeroEscolhido
})
  let tamanho = numeros.length
  if (tamanho > 0) {
    return "O número " + numeroEscolhido + " aparece " + tamanho + "x"
  } else if (tamanho === 0) {
    return "Número não encontrado"
  }
}
```