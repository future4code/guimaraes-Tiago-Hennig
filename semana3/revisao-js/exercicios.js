// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    let quantidade = array.length
    return quantidade
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let invertido = array.reverse()
    return invertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let newArray = []
    for (let numeros of array) {
        if (numeros % 2 === 0) {
            newArray.push(numeros)
    }
    }
    return newArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let newArray = []
    for (let numeros of array) {
        if (numeros % 2 === 0) {
            newArray.push(Math.pow(numeros, 2))
        }
    }
    return newArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    maior = 0
    for(let i = 0; i < array.length ; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }
    return maior
    }


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto = {maiorNumero: "" , maiorDivisivelPorMenor: Boolean , diferenca: ""}
    if (num1 > num2) {
        objeto.maiorNumero = num1
    } else if (num2 > num1){
        objeto.maiorNumero = num2
    } else if (num2 == num1) {
        objeto.maiorNumero = num2
    }
    if (objeto.maiorNumero === num1) {
        if (objeto.maiorNumero % num2 == 0) {
            objeto.maiorDivisivelPorMenor = true
        } else if (objeto.maiorNumero % num2 != 0) {
            objeto.maiorDivisivelPorMenor = false
        }
    } else if (objeto.maiorNumero === num2) {
        if (objeto.maiorNumero % num1 == 0) {
            objeto.maiorDivisivelPorMenor = true
        } else if (objeto.maiorNumero % num1 != 0) {
            objeto.maiorDivisivelPorMenor = false
        }
    }
    let diff = Math.abs(num1 - num2)
    objeto.diferenca = diff
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array = []
    let novoArray = []
    for (i=0; i < (n*2); i++){
        array.push(i)
    }
    for (let numeros of array) {
        if (numeros % 2 == 0) {
        novoArray.push(numeros)
    }
    }
    return novoArray
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if ((ladoA == ladoB) & (ladoB == ladoC)) {
        return `Equilátero`
    }
    if ((ladoA == ladoB) & (ladoA != ladoC)) {
        return `Isósceles`
    } else if ((ladoA == ladoC) & (ladoA != ladoB)) {
        return `Isósceles`
    } else if ((ladoB == ladoC) & (ladoB != ladoA)) {
        return `Isósceles`
    }
    if (((ladoA != ladoB) & (ladoB != ladoC)) & (ladoA != ladoC)) {
        return `Escaleno`
    }
    if (((ladoA != ladoB) & (ladoA != ladoC)) & (ladoB != ladoC)) {
        return `Escaleno`
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a,b)=> a-b)
    return array = [array[array.length-2], array[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}