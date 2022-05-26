function imprimeTresCoresFavoritas() :void {
    const cor1:string = prompt("Insira sua primeira cor favorita")
    const cor2:string = prompt("Insira sua segunda cor favorita")
    const cor3:string = prompt("Insira sua terceira cor favorita")
    let arrayDeCores: string[] = [cor1, cor2, cor3]
    console.log(arrayDeCores)
}
imprimeTresCoresFavoritas()