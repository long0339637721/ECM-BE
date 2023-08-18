const verifyRole = (roles) => {
    return (req, res, next) => {
        if (!req.role)
            res.status(401).json({
                result: 'fail',
                message: 'unauthorization'
            })
        else {
            if (!roles.includes(req.role))
                res.status(401).json({
                    result: 'fail',
                    message: 'unauthorization'
                })
            else
                next()
        }
    }
}

module.exports = verifyRole