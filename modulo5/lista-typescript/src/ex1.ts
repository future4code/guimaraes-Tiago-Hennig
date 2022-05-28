const register = (name:string, date:string):string => {
    const splitDate:string[] = date.split("/")
    const day:string = splitDate[0]
    const month:string = splitDate[1]
    const year:string = splitDate[2]
    return `Olá me chamo ${name}, nasci no dia ${day} do mês ${month} do ano de ${year}.`
}

console.log(register("Tiago","10/12/1993"))