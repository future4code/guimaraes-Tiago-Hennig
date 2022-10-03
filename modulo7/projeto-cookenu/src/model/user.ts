export type user = {
   id: string
   email: string
   password: string
   name: string,
   role: USER_ROLES
}

export interface UserInputDTO {
   name: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export interface getAnotherProfileInputDTO {
   id: string,
   token: string
}

export interface EditUserInput {
   name: string,
   id: string
}

export interface LoginInputDTO {
   email: string,
   password: string
}

export type UserOutput = {
   id: string,
   name: string,
   email: string
}

enum USER_ROLES {
   admin = "admin", 
   user = "user"
}