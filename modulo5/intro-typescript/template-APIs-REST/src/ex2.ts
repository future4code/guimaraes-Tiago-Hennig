function imprimeTresCoresFavoritas(cor1: string, cor2: string, cor3: string) :void {
    cor1 = prompt("Insira sua primeira cor favorita")
    cor2 = prompt("Insira sua segunda cor favorita")
    cor3 = prompt("Insira sua terceira cor favorita")
    let arrayDeCores: string[] = [cor1, cor2, cor3]
    console.log(arrayDeCores)
}

imprimeTresCoresFavoritas("AMARELO", "AMARELO", "AMARELO")