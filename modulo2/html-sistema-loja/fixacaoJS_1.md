```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    const salarioFixo = 2000
    const comissao = (valorTotalVendas * 0.05) + (100 * qtdeCarrosVendidos)
    let salarioFinal = salarioFixo + comissao
    return salarioFinal
} 
```