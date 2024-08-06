import userModel from "../../../../DB/model/user.model.js"
import { asyncHandler } from "../../../utils/errorHandling.js"

//  multer / cloudnairy
export const profile = asyncHandler(async (req, res, next) => {
  const user = await userModel.findById(req.user._id)
  return res.json({ message: "Done", user })
})

export const update = asyncHandler(async (req, res, next) => {
  const { userName, phone } = req.body
  const updateUser = await userModel.findByIdAndUpdate(req.user._id, { userName, phone }, { new: true })
  res.json({ message: "Done" }, updateUser)

})

export const deletedUser = asyncHandler(async (req, res, next) => {
  const user = await userModel.findByIdAndDelete(req.user._id)
  res.json({ message: "Done" })
})

