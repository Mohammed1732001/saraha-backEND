


const dataMethods = ["body", "params", "query", "headers", "file"]
export const validtion = (schema) => {
    return (req, res, next) => {
        const validationErrors = []
        dataMethods.forEach(key => {
            if (schema[key]) {
                const validationResult = schema[key].validate(req[key], { abortEarly: false })
                if (validationResult.error) {
                    validationErrors.push(validationResult.error.details)
                }
            }
        })
        if (validationErrors.length) {
            return res.json({ massage: "validaton", validationErrors })
        }
        return next()
    }
}
