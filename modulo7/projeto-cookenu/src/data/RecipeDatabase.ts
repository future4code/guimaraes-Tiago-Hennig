import { CustomError } from "../error/customError";
import { recipe, recipeOutput } from "../model/recipe";
import { BaseDatabase } from "./BaseDatabase";



export class RecipeDatabase extends BaseDatabase {

    private tableName = "Cookenu_recipes"

    public createRecipe = async (recipe: recipe) => {
        try {
            await RecipeDatabase.connection
                .insert({
                    id: recipe.id,
                    title: recipe.title,
                    description: recipe.description,
                    author_id: recipe.authorId
                })
                .into(this.tableName);
        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    };

    public getRecipe = async (id: string): Promise<recipeOutput> => {

        try {

            const result = await RecipeDatabase.connection(this.tableName)
                .select("id", "title", "description", "created_at")
                .where("id", "like", id)

            return result[0]

        } catch (error:any) {
            throw new CustomError(400, error.message)
        }

    }


    public getAllRecipes = async (): Promise<recipeOutput[]> => {

        try {

            const result = await RecipeDatabase.connection(this.tableName)
                .select("id", "title", "description", "created_at")

            return result

        } catch (error:any) {
            throw new CustomError(400, error.message)
        }

    }


}