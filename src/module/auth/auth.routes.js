import { Router } from "express";
import * as authController from "./controller/auth.js"
import { validtion } from "../../middlewere/validation.middleware.js"
import * as validators from "./validation.js"
const authRouter = Router()


authRouter.post("/signup", validtion(validators.signUp), authController.signUp)
authRouter.post("/login", validtion(validators.login), authController.login)
authRouter.get('/confirmEmail/:token', authController.confirmEmail)
authRouter.get('/confirmEmail/resend/:token', authController.reFreshConfirmEmail)

export default authRouter