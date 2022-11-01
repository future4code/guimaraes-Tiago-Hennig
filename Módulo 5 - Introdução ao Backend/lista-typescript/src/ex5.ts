enum ROLE {
    ADMIN = "admin",
    USER = "user"
}

type User = {
    name:string,
    email:string,
    role:ROLE
}

const users:User[] = [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
]

const adminRole = (param:User[]):string[] =>  {
    return param.filter(
        (person:User) => {
            return person.role == ROLE.ADMIN
        }
    ).map(
        (person:User) => {
            return person.email
            }
        )
}

console.log(adminRole(users))