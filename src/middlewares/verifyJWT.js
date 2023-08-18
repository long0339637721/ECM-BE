const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization
    if (!authHeader || authHeader === '' || !authHeader?.startsWith('Bearer')) {
        res.status(401).json({
            result: 'fail',
            message: 'unauthorization'
        })
    }
    else {
        const accessToken = authHeader.split(' ')[1]
        jwt.verify(
            accessToken,
            process.env.ACCESS_TOKEN_SECRET,
            (err, decoded) => {
                if (err)
                    res.status(401).json({
                        result: 'fail',
                        message: 'unauthorization'
                    })
                else {
                    req.username = decoded.username
                    req.role = decoded.role
                        next()
                }
            }
        )
    }
}

module.exports = verifyJWT