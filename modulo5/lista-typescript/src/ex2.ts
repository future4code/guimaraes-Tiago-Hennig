

const checkType = (param:any):string => {
    return typeof param
}

console.log(checkType(15))
console.log(checkType([10,10]))
console.log(checkType("Tiago"))
console.log(checkType(["Tiago", "Juliano"]))
console.log(checkType(true))
