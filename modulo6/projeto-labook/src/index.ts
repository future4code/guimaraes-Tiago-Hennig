import { app } from "./controller/app"
import { feedRouter } from "./controller/routes/feedRouter"
import { friendshipRouter } from "./controller/routes/friendshipRouter"
import { postRouter } from "./controller/routes/postRouter"
import { userRouter } from "./controller/routes/userRouter"


app.use('/', userRouter )

app.use('/',postRouter )

app.use('/', friendshipRouter)

app.use('/', feedRouter)
