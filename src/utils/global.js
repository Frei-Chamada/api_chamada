global.createError = function createError(err) {
    let obj = {
        error: err.message
    }

    return obj;
}
