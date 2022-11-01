export interface Client {
    name: string;
    // Refere-se ao nome do cliente

    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id

    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês

    calculateBill(): number;
    // Retorna o valor da conta em reais
}

const newCliente: Client = {
    name: "Rodrigo",
    registrationNumber: 123,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2
    }
}



export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}



export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }

    public getResidentsQuantity(): number {
        return this.residentsQuantity
    }
}



export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}



export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }

    public getMachinesQuantity(): number {
        return this.machinesQuantity
    }
}


export class ResidentialClient extends Residence {
    constructor(
        private cpf: string
    )

    
}