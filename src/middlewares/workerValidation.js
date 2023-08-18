const workerValidation = (req, res, next) => {
    if (req.body.name !== undefined) {
        if (req.body.name === '') {
            res.status(406).json({
                result: 'fail',
                message: 'name must not empty'
            })
            return
        }
    }
    if (req.body.phone !== undefined) {
        if (req.body.phone === '') {
            res.status(406).json({
                result: 'fail',
                message: 'phone must not empty'
            })
            return
        }
    }
    if (req.body.role !== undefined) {
        if (req.body.role === '') {
            res.status(406).json({
                result: 'fail',
                message: 'role must not empty'
            })
            return
        }
        else if (req.body.role !== 'teacher' && req.body.role !== 'manager') {
            res.status(406).json({
                result: 'fail',
                message: 'role can only be teacher or manager'
            })
            return
        }
    }
    return next()
}

module.exports = workerValidation