const express = require('express')
const router = express.Router()
const studentController = require('../controllers/student.controller')

router.get('/all', studentController.getAll)
router.get('/:id', studentController.get)
router.get('/class/:id', studentController.getStudentInClass)
router.delete('/:id', studentController.delete)
router.post('/create', studentController.create)
router.patch('/:id', studentController.update)

module.exports = router