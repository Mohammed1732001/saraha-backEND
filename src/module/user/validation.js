import joi from "joi"

export const update = joi.object({
    userName: joi.string().required(),
    phone: joi.string().pattern(new RegExp(/^01[0125][0-9]{8}$/)).required()
})