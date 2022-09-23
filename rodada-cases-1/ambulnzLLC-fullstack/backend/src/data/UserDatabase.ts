import { CustomError } from "../error/errors";
import { User } from "../model/UserModel";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {
    private static TABLE_NAME = "ambulnz_users"

    async createUser(input:User)
        {
            try {
                const {id, name, email, password} = input

                await this.getConnection()
                .insert({
                    id,
                    name,
                    email,
                    password
                }).into(UserDatabase.TABLE_NAME)

            } catch (error:any) {
                throw new Error(error.sqlmessage || error.message)
            }
        }
        
    async findUserByEmail(email: string): Promise<any>  {
            try {
                const result = await this.getConnection()
                    .select("*")
                    .from(UserDatabase.TABLE_NAME)
                    .where("email", "like", email);
    
                return result[0]
            } catch (error: any) {
                throw new Error(error.sqlmessage || error.message)
            }
        };


    async login(id:string) {

        try {
            const result = await this.getConnection()
            .select("*")
            .from(UserDatabase.TABLE_NAME)
            .where("id", "like", id)

            return result

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

}