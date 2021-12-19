```
function calculaPrecoTotal(quantidade) {
  let preco = 0
  if (quantidade < 12) {
    preco = 1.30
  } else {
    preco = 1.00
  }
  let custoTotal = quantidade * preco
  return custoTotal
}
```