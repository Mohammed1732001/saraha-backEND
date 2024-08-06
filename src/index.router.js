
import { connectDB } from "../DB/conniction.js"
import authRouter from "./module/auth/auth.routes.js"
import userRouter from "./module/user/user.routes.js"
import { globalError } from "./utils/errorHandling.js"




export const bootstrap = (app, express) => {

    app.use(express.json())
    // Router
    app.use('/user', userRouter)
    app.use('/auth', authRouter)
    app.use("*", (req, res, next) => {
        return res.json({ message: "Not Found Router" })
    })
    // Data Base
    connectDB()
    // Error
    app.use(globalError)
}