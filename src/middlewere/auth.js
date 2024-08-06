import userModel from "../../DB/model/user.model.js";
import { asyncHandler } from "../utils/errorHandling.js";
import jwt from "jsonwebtoken"

export const auth = asyncHandler(async (req, res, next) => {

    const { authorization } = req.headers
    console.log({ authorization });
    if (!authorization) {
        return next(new Error("Authorization Is Required"))
    }
    const decoded = jwt.verify(authorization, process.env.TOKEN_SIGNTURE)
    console.log(decoded);
    if (!decoded?.id) {
        return next(new Error("In Valied Token Payload"))
    }

    const user = await userModel.findById(decoded.id).select("userName emai ")
    if (!user) {
        return next(new Error("Not Rigister User"))

    }
    req.user = user
    return next()
}) 