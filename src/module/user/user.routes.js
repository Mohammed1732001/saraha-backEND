import { Router } from "express";
import * as userController from "../user/controller/user.js"
import { auth } from "../../middlewere/auth.js";
import { validtion } from "../../middlewere/validation.middleware.js";
import * as validator from "./validation.js"
const userRouter = Router()

userRouter.get("/", auth, userController.profile)
userRouter.put("/", auth, validtion(validator.update), userController.update)
userRouter.delete("/", auth, userController.deletedUser)

export default userRouter 