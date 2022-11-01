import { CustomError } from "../error/CustomError";
import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

	private static DB = "labook_users";

	public insertUser = async (
		user: user
	) => {
		try {
			
			const checkEmailUnique = await UserDatabase.connection(UserDatabase.DB)
			.select("*").where("email", "like", user.email)

			if (checkEmailUnique.length) {
				throw new CustomError("O email digitado já foi utilizado em outra conta.", 400)
			}

			await UserDatabase.connection(UserDatabase.DB).insert({
				id: user.id,
				name: user.name,
				email: user.email,
				password: user.password
			})

		} catch (error: any) {
			throw new Error(error.message || error.sqlMessage)
		}

	}


	public getUser = async () => {
		try {


			const response: user[] = await UserDatabase.connection(UserDatabase.DB)
			.select("*")

			return response

		} catch (error: any) {
			throw new Error(error.message || error.sqlMessage)
		}
	}

	public getUserById = async (id:any) => {
		try {
			const response: user[] = await UserDatabase.connection(UserDatabase.DB)
			.select("*")
			.where("id", "like", id)

			return response

		} catch (error:any) {
			throw new Error(error.message)
		}
	}


}

