import { Schema, model } from "mongoose";

const userSchema = new Schema({
    fristName: { type: String, required: true, lowercase: true },
    lastName: { type: String, required: true , lowercase: true },
    userName: { type: String, required: true , lowercase: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    phone: String,
    profileImage: String,
    coverImage: [String],
    gender: { type: String, default: "Male", enum: ['Male', 'Female'] },
    confirmEmail: { type: Boolean, default: false },

}, { timestamps: true })

const userModel = model("user", userSchema)

export default userModel