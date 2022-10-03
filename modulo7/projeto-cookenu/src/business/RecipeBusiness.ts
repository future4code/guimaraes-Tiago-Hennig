import { RecipeDatabase } from "../data/RecipeDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { CustomError, MissingInformation, MissingToken, Unauthorized, UserNotFound } from "../error/customError";
import { recipeInputDTO, recipeOutput, getRecipeDTO } from "../model/recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import moment from "moment"

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

            const recipe = {
                id,
                title,
                description,
                authorId: tokenData.id
            }

            const result = this.recipeDatabase.createRecipe(recipe)

            return result

        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }


    public getRecipe = async (input: getRecipeDTO): Promise<recipeOutput> => {

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

            const recipeDB = await this.recipeDatabase.getRecipe(id)

            if (!recipeDB) {
                throw new CustomError(400, "Não foi encontrada uma receita com o id informado.")
            }

            if (!tokenData) {
                throw new Unauthorized()
            }

            const formattedDate = moment(recipeDB.created_at).format("DD/MM/YYYY")

            recipeDB.created_at = formattedDate

            return recipeDB

        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public getAllRecipes = async (token: string): Promise<recipeOutput[]> => {

        try {

            if (!token) {
                throw new MissingToken()
            }

            const tokenData = authenticator.getTokenData(token)
            const userExist = await this.userDatabase.getProfile(tokenData.id)

            if (!userExist) {
                throw new UserNotFound()
            }

            if (!tokenData) {
                throw new Unauthorized()
            }

            const recipeDB = await this.recipeDatabase.getAllRecipes()

            if (!recipeDB) {
                throw new CustomError(400, "Não há nenhuma receita cadastrada no nosso banco de dados no momento.")
            }

            recipeDB.map(date => {
                const formattedDate = moment(date.created_at).format("DD/MM/YYYY")
                date.created_at = formattedDate
            })

            return recipeDB

        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}