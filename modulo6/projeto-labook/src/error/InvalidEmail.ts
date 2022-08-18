import { CustomError } from "./CustomError";

export class InvalidEmail extends CustomError {
    constructor(){
        super("Email inválido", 400)
    }
}