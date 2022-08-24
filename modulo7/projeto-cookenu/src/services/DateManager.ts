
export const DateOfCreation = ():string => {

    const data = new Date()
    const day = String(data.getDate()).padStart(2, '0')
    const month = String(data.getMonth() + 1).padStart(2, '0')
    const year = data.getFullYear()
    const today:string = day + '/' + month + '/' + year

    return today

}
