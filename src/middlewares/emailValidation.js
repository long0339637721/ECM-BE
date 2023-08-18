const validateEmail = (req, res, next) => {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (req.body.email !== undefined) {
        if (req.body.email === '')
            res.status(406).json({
                result: 'fail',
                message: 'email must not empty'
            })
        else if (!req.body.email.match(emailRegex))
            res.status(406).json({
                result: 'fail',
                message: 'wrong email format'
            })
        else
            return next()
    }
    else
        return next()
}

module.exports = validateEmail