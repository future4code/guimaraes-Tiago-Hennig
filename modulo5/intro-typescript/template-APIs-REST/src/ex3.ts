const checaAnoBissexto = (ano:number) :Boolean => {
    const cond1:Boolean = ano % 400 === 0
    const cond2:Boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1|| cond2
}

console.log(checaAnoBissexto(2024)) //true
console.log(checaAnoBissexto(2022)) //false