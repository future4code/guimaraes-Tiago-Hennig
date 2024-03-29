import { CustomError } from "../error/customError";
import { EditUserInput, user, UserInputDTO } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public signUp = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          email: user.email,
          password: user.password,
        })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };


  public login = async (email: string) => {
    try {
      const result = await UserDatabase.connection("Auth_users")
      .select()
      .where({email})

      return result[0]

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };



  public editUser = async (user: EditUserInput) => {
    try {
      await UserDatabase.connection
        .update({ email: user.email, password: user.password })
        .where({ id: user.id })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }


  public getUser = async (id: string) => {
    try {
      const result = await UserDatabase.connection("Auth_users")
      .select("id", "email")
      .where({id})

      return result[0]

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
