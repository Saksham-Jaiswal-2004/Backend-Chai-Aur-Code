// Try Catch Method
const asyncHandler1 = (requestHandler) => async (req, res, next) => {
    try {
        await requestHandler(req, res, next);
    } catch(error) {
        res.statu(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}

// Promises Method
const asyncHandler2 = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler2}