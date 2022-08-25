import { app } from "./controller/app"
import { recipeRouter } from "./controller/router/recipeRouter"
import { userRouter } from "./controller/router/userRouter"


app.use('/', userRouter)
app.use('/', recipeRouter)
