import { CustomError } from "./CustomError";

export class InvalidRequest extends CustomError {
    constructor(){
        super("Requisição inválida, um ou mais campos vazios", 400)
    }
}