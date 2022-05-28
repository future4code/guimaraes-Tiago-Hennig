type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[] | any
}

const clientes:Cliente[] = [
        { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, debitos: [] }
    ]

    clientes.forEach(item => {
        let soma = 0
        for (let i = 0; i < item.debitos.length; i++) {
            soma += item.debitos[i]
        }
        item.debitos = soma
    })

// const checaSaldoNegativo = (array:Cliente[]) => {
//     array.forEach(item => {
//         let soma = 0
//         for (let i = 0; i < item.debitos.length; i++) {
//             soma += item.debitos[i]
//         }
//         item.debitos = soma
//     })

//     // const array3 = array2.filter((item:any) => {
//     //     item.saldoTotal < item.debitos

//     //     })
    

    
// }



// const checaSaldoNegativo = (array:Cliente[]) => {
//     const item = array.forEach(item => {
//         item.debitos = [10]
//     })
//     return item



//     // const item:number[] = array.map((person) => {
//     //     let soma = 0
//     //     for (let i=0; i < person.debitos.length; i++) {
//     //         soma += person.debitos[i]
//     //     }
//     //     return soma
//     // })
//     //     return item

// }

console.log((clientes))







    // clientes.forEach(item => {
    //     let soma = 0
    //     for (let i = 0; i < item.debitos.length; i++) {
    //         soma += item.debitos[i]
    //     }
    //     item.debitos = soma
    // })