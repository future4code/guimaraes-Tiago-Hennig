export class CustomError extends Error {
    constructor(statusCode: number, message: string) {
        super(message)
    }
}

export class MissingInformation extends CustomError {
    constructor() {
        super(422, "Please, check if all informations are complete.")
    }
}

export class Unauthorized extends CustomError {
    constructor() {
        super(401, "Invalid token. Unauthorized user. Please try again.")
    }
}