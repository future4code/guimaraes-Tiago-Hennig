import express from "express"
import { RecipeController } from "../RecipeController"

export const recipeRouter = express.Router()

const recipeController = new RecipeController()

recipeRouter.post('/recipe', recipeController.createRecipe)
recipeRouter.get('/recipe/:id', recipeController.getRecipe)
recipeRouter.get('/recipe', recipeController.getAllRecipes)
