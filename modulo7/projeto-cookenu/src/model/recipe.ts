export type recipe = {
    id: string,
    title: string,
    description: string,
    authorId: string
}

export type recipeInputDTO = {
    title: string,
    description: string,
    token: string
}

export type recipeDatabase = {
    id: string,
    title: string,
    description: string,
    authorId: string
}

export type recipeOutput = {
    id: string,
    title: string,
    description: string,
    created_at: string
}

export type getRecipeDTO = {
    id: string,
    token: string
}