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

    const checarEmprestimo = (array:Cliente[]):Cliente[] => {
        array.forEach((item:Cliente) => {
            const debits = item.debitos.reduce((a:number, b:number) => a + b, 0)
            item.saldoTotal = item.saldoTotal - debits
            item.debitos = []
        })
        const checaSaldoNegativo = array.filter((item) => item.saldoTotal < 0)
        return checaSaldoNegativo
    }

console.log(checarEmprestimo(clientes))