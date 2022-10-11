export type user = {
   id: string
   email: string
   password: string
}

export interface UserInputDTO {
   email: string,
   password: string
}

export interface EditUserInputDTO {
   email: string,
   password: string,
   token: string
}

export interface EditUserInput {
   email: string,
   password: string,
   id: string
}