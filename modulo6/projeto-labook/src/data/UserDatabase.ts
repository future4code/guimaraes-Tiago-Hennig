import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

	private static DB = "labook_users";

	public insertUser = async (
		user: user
	) => {
		try {
			await UserDatabase.connection(UserDatabase.DB).insert({
				id: user.id,
				name: user.name,
				email: user.email,
				password: user.password
			})

		} catch (error: any) {
			throw new Error(error.message)
		}

	}


	public getUser = async () => {
		try {
			const response: user[] = await UserDatabase.connection(UserDatabase.DB)
			.select("*")

			return response

		} catch (error: any) {
			throw new Error(error.message)
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

