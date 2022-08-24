import { CustomError } from "../error/customError";
import { recipe } from "../model/recipe";
import { user, UserOutput } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
	public insertUser = async (user: user) => {
		try {
			await UserDatabase.connection
				.insert({
					id: user.id,
					name: user.name,
					email: user.email,
					password: user.password,
					role: user.role
				})
				.into("Cookenu_users");
		} catch (error: any) {
			throw new CustomError(400, error.message);
		}
	};


	public findUserByEmail = async (email: string): Promise<user> => {
		try {
			const result = await UserDatabase.connection("Cookenu_users")
				.select("*")
				.where("email", "like", email);

			return result[0]
		} catch (error: any) {
			throw new CustomError(400, error.message);
		}
	};


	public getProfile = async (id: string): Promise<UserOutput> => {

		try {

			const result = await UserDatabase.connection("Cookenu_users")
				.select("id", "name", "email")
				.where("id", "like", id)

			return result[0]

		} catch (error: any) {
			throw new CustomError(400, error.message)
		}
	}



}
