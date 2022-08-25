import { UserDatabase } from "../data/UserDatabase";
import { CustomError, EmailAlreadyExists, InvalidEmail, InvalidName, InvalidPassword, InvalidToken, UserNotFound } from "../error/customError";
import { UserInputDTO, user, UserOutput } from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator();
const authenticator = new Authenticator();
const hashManager = new HashManager()

export class UserBusiness {

	private userDatabase: UserDatabase
	constructor() {
		this.userDatabase = new UserDatabase()
	}

	public signup = async (input: UserInputDTO): Promise<string> => {
		try {
			const { name, email, password, role } = input;

			if (!name || !email || !password) {
				throw new CustomError(400, 'Preencha os campos "name", "email", "password" e "role".')
			}

			const checkEmail = await this.userDatabase.findUserByEmail(email)

			if (checkEmail) {
				throw new EmailAlreadyExists()
			}

			if (name.length < 4) {
				throw new InvalidName();
			}

			if (!email.includes("@")) {
				throw new InvalidEmail();
			}

			if (password.length < 6) {
				throw new CustomError(400, "A senha deve ter no mínimo 6 caracteres")
			}

			if (role !== "user" && role !== "admin") {
				throw new CustomError(422, 'A propriedade "role" deve ser "admin" ou "user".')
			}

			const id: string = idGenerator.generateId();
			const hashPassword = await hashManager.hashGenerator(password)

			const userSignUp: user = {
				id,
				name,
				email,
				password: hashPassword,
				role
			};

			await this.userDatabase.insertUser(userSignUp);
			const payload = { id, role }

			const token = authenticator.generateToken(payload);
			return token;
		} catch (error: any) {
			throw new CustomError(400, error.message);
		}
	};


	public login = async (input: any): Promise<string> => {
		try {
			const { email, password } = input;

			if (!email || !password) {
				throw new CustomError(400, 'Preencha os campos "email" e "password"');
			}

			if (!email.includes("@")) {
				throw new InvalidEmail();
			}

			const user = await this.userDatabase.findUserByEmail(email);

			if (!user) {
				throw new UserNotFound();
			}

			const hashPassword = await hashManager.hashCompare(password, user.password)

			if (!hashPassword) {
				throw new InvalidPassword();
			}

			const payload = {
				id: user.id,
				role: user.role
			}

			const token = authenticator.generateToken(payload);
			
			return token;
		} catch (error: any) {
			throw new CustomError(400, error.message)
		}
	};


	public getOwnProfile = async (input: any): Promise<UserOutput> => {
		try {

			const tokenData = authenticator.getTokenData(input)

			const user = await this.userDatabase.getProfile(tokenData.id)

			if (!user) {
				throw new UserNotFound();
			}

			return user

		} catch (error: any) {
			throw new CustomError(400, error.message)
		}
	};



	public getAnotherProfile = async (input: any): Promise<UserOutput> => {

		try {
			const {token, id} = input

		const tokenData = authenticator.getTokenData(token)

		const userExists = await this.userDatabase.getProfile(tokenData.id)

		if (!userExists) {
			throw new InvalidToken();
		}

		const user = await this.userDatabase.getProfile(id)

		if (!user) {
			throw new UserNotFound()
		}

		return user

		} catch (error:any) {
			throw new CustomError(400, error.message)
		}


		

	}



	// public editUser = async (input: EditUserInputDTO) => {
	//   try {
	//     const { name, nickname, token } = input;

	//     if (!name || !nickname) {
	//       throw new CustomError(
	//         400,
	//         'Preencha os campos , "name" e "nickname"'
	//       );
	//     }
	//     const { id } = authenticator.getTokenData(token)

	//     if (name.length < 4) {
	//       throw new InvalidName();
	//     }

	//     const editUserInput: EditUserInput = {
	//       id,
	//       name,
	//       nickname,
	//     };

	//     const userDatabase = new UserDatabase();
	//     await userDatabase.editUser(editUserInput);
	//   } catch (error: any) {
	//     throw new CustomError(400, error.message);
	//   }
	// };
}
