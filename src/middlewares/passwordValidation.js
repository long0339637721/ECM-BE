const validatePassword = (req, res, next) => {
    let password = req.body.newPassword || req.body.password

    let characterConstrain = /(\w+)/
    let capitalizationConstrain = /[A-Z]/
    let specialCharacterConstrain = /(\W)/

    if (!password.match(characterConstrain))
        res.json({
            result: 'fail',
            message: 'password must have word and digit character'
        })
    else if (!password.match(capitalizationConstrain))
        res.json({
            result: 'fail',
            message: 'password must have at least one capitalization word'
        })
    else if (!password.match(specialCharacterConstrain)) 
        res.json({
            result: 'fail',
            message: 'password must have special character'
        })
    else 
        next()
}

module.exports = validatePassword