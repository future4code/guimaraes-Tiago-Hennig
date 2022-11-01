
import { app } from "./controller/app"
import { movieRouter } from "./controller/routes/movieRouter"
import {userRouter} from "./controller/routes/userRouter"

app.use("/", userRouter)

app.use("/", movieRouter)
