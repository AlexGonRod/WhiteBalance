const success = data =>  ({ status: 'OK', data })


function fail(error) {
    const res = { status: 'KO'}

    if (error) res.error = error

    return error
}

module.exports = { success, fail}