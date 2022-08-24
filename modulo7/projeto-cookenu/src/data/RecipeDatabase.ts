import { CustomError } from "../error/customError";
import { recipe, recipeOutput } from "../model/recipe";
import { EditUserInput } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";



export class RecipeDatabase extends BaseDatabase {
    public createRecipe = async (recipe: recipe) => {
        try {
            await RecipeDatabase.connection
                .insert({
                    id: recipe.id,
                    title: recipe.title,
                    description: recipe.description,
                    author_id: recipe.authorId,
                    created_at: recipe.createdAt
                })
                .into("Cookenu_recipes");
        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    };

    public getRecipe = async (id: string): Promise<recipeOutput> => {

        try {

            const result = await RecipeDatabase.connection("Cookenu_recipes")
                .select("id", "title", "description", "created_at")
                .where("id", "like", id)

            return result[0]

        } catch (error:any) {
            throw new CustomError(400, error.message)
        }

    }



}