import * as jwt from "jsonwebtoken";
import { Unauthorized } from "../error/customError";

export type AuthenticationData = {
  id: string,
  role: string
};

export class Authenticator {
  generateToken = (payload: AuthenticationData): string => {
    const token = jwt.sign(
      payload, 
      process.env.JWT_KEY as string, 
      {expiresIn: process.env.JWT_DURATION,});
    return token;
  };

  getTokenData = (token: string): AuthenticationData => {
    try {
      const payload = jwt.verify(
        token,
        process.env.JWT_KEY as string) as AuthenticationData;

      const result: AuthenticationData = {
        id: payload.id,
        role: payload.role
      }

      return result;

    } catch (error: any) {

      console.log(error.message)
      throw new Unauthorized()
    }

  };
}
