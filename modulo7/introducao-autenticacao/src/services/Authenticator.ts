import * as jwt from "jsonwebtoken";
import { CustomError } from "../error/customError";
import { AuthenticationData } from "../model/authenticationData";


export const authenticator = (token: string): AuthenticationData => {
    try {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
            id: payload.id,
        };
        return result;
    } catch (error:any) {
        console.log(error.message)
        throw new CustomError(401, "Usuário não autorizado!")
    }
    
    

};