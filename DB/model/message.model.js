import { Schema, Types, model } from "mongoose";

const messageSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    sendTo: {
        type: Types.ObjectId,
        ref: "user",
        required: true
    }


}, { timestamps: true })

export const messagemodel = model("message", messageSchema)
