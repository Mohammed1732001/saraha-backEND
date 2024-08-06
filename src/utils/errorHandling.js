



export const asyncHandler = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(err => {
            next(new Error(err))
        })
    }
}

export const globalError = (err, req, res, next) => {
    return res.json({ message: err.message, stack: err.stack })
}
