import { UserDatabase } from "../data/UserDatabase";
import { CustomError, MissingInformation } from "../error/errors";
import { User } from "../model/UserModel";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator()
const hashManager = new HashManager()
const authenticator = new Authenticator();

export class UserBusiness {

    private userDatabase: UserDatabase
    constructor(){
        this.userDatabase = new UserDatabase()
    }

    async createUser(input:any) {

        const {name, email, password} = input

        if (!name || !email || !password) {
            throw new MissingInformation()
        }

        const checkEmail = await this.userDatabase.findUserByEmail(email)

        if (checkEmail) {
            throw new CustomError(400, "This email is already being used in our database.")
        }

        if (name.length < 4) {
            throw new CustomError(400, "A name must have at least 4 letters.")
        }

        if (!email.includes("@")) {
            throw new CustomError(400, "Invalid email.")
        }

        if (password.length < 6) {
            throw new CustomError(400, "Invalid password. A valid password must contain at least 6 characters.")
        }

        const id: string = idGenerator.generateId()
        const hashPassword= await hashManager.hashGenerator(password)

        const userSignUp:User = {
            id,
            name,
            email,
            password: hashPassword
        }

        await this.userDatabase.createUser(userSignUp)

        const payload = {
            id
        }

        const token = authenticator.generateToken(payload)

        return token

    }


    async login(input:any) {

        const { email, password } = input

        if ( !email || !password ) {
            throw new MissingInformation()
        }

        const user = await this.userDatabase.findUserByEmail(email)

        if (!user) {
            throw new CustomError(400, "Invalid email. This email isn't in our database.")
        }

        const hashPassword= await hashManager.hashCompare(password, user.password)

        if (!hashPassword) {
            throw new CustomError(400, "Wrong password!")
        }

        const payload = {
            id: user.id
        }

        const token = authenticator.generateToken(payload)

        return token

    }

}