export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Nome inválido")
    }
}

export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "Email inválido")
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Senha inválida")
    }
}

export class UserNotFound extends CustomError{ 
    constructor(){
        super(404, "Usuário não encontrado")
    }
}

export class Unauthorized extends CustomError{ 
    constructor(){
        super(401, "Token inválido. Usuário não autorizado. Faça login novamente.")
    }
}

export class EmailAlreadyExists extends CustomError {
    constructor(){
        super(409, "Este email já existe vinculado a outra conta.")
    }
}

export class InvalidToken extends CustomError{ 
    constructor(){
        super(404, "Este token não é válido")
    }
}

export class MissingInformation extends CustomError{
    constructor() {
        super(400, 'É necessário completar os campos "title" e "description".')
    }
}

export class MissingToken extends CustomError{
    constructor() {
        super(400, 'É necessário fornecer um token.')
    }
}