import { UserDatabase } from "../data/UserDatabase";
import { InvalidEmail } from "../error/InvalidEmail";
import { InvalidRequest } from "../error/InvalidRequest";
import { ShortName } from "../error/ShortName";
import { user, UserInputDTO } from "../model/user";
import { generateId } from "../services/generateId";


export class UserBusiness {
	public createUser = async (input: UserInputDTO) => {
		try {
			const { name, email, password } = input;

			if (!name || !email || !password) {
				throw new InvalidRequest()
			}

			if (!email.includes("@")) {
				throw new InvalidEmail()
			}

			if (name.length < 3) {
				throw new ShortName()
			}

			const id: string = generateId()

			const userDatabase = new UserDatabase();
			await userDatabase.insertUser({
				id,
				name,
				email,
				password,
			})

		} catch (error: any) {
			throw new Error(error.message || error.sqlMessage);
		}
	}


	public getUser = async () => {
		try {
			const userDatabase = new UserDatabase()
			const response = await userDatabase.getUser()

			return response

		} catch (error: any) {
			throw new Error(error.message || error.sqlMessage)
		}
	}

	public getUserById = async (id:any) => {
		try {
			const userDatabase = new UserDatabase()
			const response:user[] = await userDatabase.getUserById(id)

			return response

		} catch (error:any) {
			throw new Error(error.message || error.sqlMessage)
		}
	}

}

