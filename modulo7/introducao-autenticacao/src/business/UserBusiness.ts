import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword } from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
} from "../model/user";
import { authenticator } from "../services/Authenticator";
import { generateId } from "../services/GenerateId";
import { generateToken } from "../services/GenerateToken";



export class UserBusiness {
  public signUp = async (input: UserInputDTO) => {
    try {
      const { email, password } = input;

      if ( !email || !password ) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        );
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      if (password.length < 6) {
        throw new CustomError(400, "A senha deve conter no mínimo 6 caracteres.")
      }

      const id: string = generateId()

      const user: user = {
        id,
        email,
        password,
      };
      const userDatabase = new UserDatabase();
      await userDatabase.signUp(user);

      const token = generateToken({id})

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };


  public login = async (input: UserInputDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if ( !email || !password ) {
        throw new CustomError(400,'Preencha os campos "email" e "password"');
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const userDatabase = new UserDatabase();
      const user = await userDatabase.login(email);

      if (!user) {
        throw new CustomError(404, "Usuário não encontrado.");
      }

      if (user.password !== password) {
        throw new InvalidPassword();
      }
      const id = user.id
      const token = generateToken({id})

      return token

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }




  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { password, email, token } = input;

      if (!email || !password ) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password".'
        );
      }

      const {id} = authenticator(token)

      if (password.length < 4) {
        throw new InvalidPassword();
      }

      const editUserInput: EditUserInput = {
        id,
        email,
        password,
      };

      const userDatabase = new UserDatabase();
      await userDatabase.editUser(editUserInput);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }


  public getUser = async (token: string): Promise<string> => {
    try {

      if ( !token ) {
        throw new CustomError(400,'Preencha o hearder Authorization com um token.');
      }

      const {id} = authenticator(token)

      const userDatabase = new UserDatabase();
      const result = await userDatabase.getUser(id);

      return result

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

}
