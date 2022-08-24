import { RecipeDatabase } from "../data/RecipeDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidToken, MissingInformation, MissingToken, Unauthorized, UserNotFound } from "../error/customError";
import { recipeInputDTO, recipeOutput } from "../model/recipe";
import { Authenticator } from "../services/Authenticator";
import { DateOfCreation } from "../services/DateManager";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator()
const authenticator = new Authenticator()

export class RecipeBusiness {

    private recipeDatabase: RecipeDatabase
    private userDatabase: UserDatabase
	constructor() {
		this.recipeDatabase = new RecipeDatabase(),
        this.userDatabase = new UserDatabase()
	}


    public createRecipe = async (input: recipeInputDTO): Promise<void> => {
        try {
            const { title, description, token } = input

            if (!title || !description) {
                throw new MissingInformation()
            }

            if (!token) {
                throw new MissingToken()
            }

            const id: string = idGenerator.generateId()
            const tokenData = authenticator.getTokenData(token)
            const userExist = await this.userDatabase.getProfile(tokenData.id)

            if (!userExist) {
                throw new UserNotFound()
            }

            if (!tokenData) {
                throw new Unauthorized()
            }

            const date = DateOfCreation()

            const recipe = {
                id,
                title,
                description,
                authorId: tokenData.id,
                createdAt: date
            }

            const result = this.recipeDatabase.createRecipe(recipe)

            return result


        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }


    public getRecipe = async (input: any): Promise<recipeOutput> => {

        try {

            const { id, token } = input

            if (!token) {
                throw new MissingToken()
            }

            const tokenData = authenticator.getTokenData(token)
            const userExist = await this.userDatabase.getProfile(tokenData.id)

            if (!userExist) {
                throw new UserNotFound()
            }

            const recipe = await this.recipeDatabase.getRecipe(id)

            if (!recipe) {
                throw new CustomError(400, "Não foi encontrada uma receita com o id informado.")
            }

            if (!tokenData) {
                throw new Unauthorized()
            }

            return recipe

        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}