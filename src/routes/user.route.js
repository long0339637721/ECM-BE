const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')

router.get('/all', userController.getAll)
router.get('/teacher/all', userController.getTeacherAll)
router.get('/manager/all', userController.getManagerAll)
router.get('/teacherClass/all', userController.getTeacherClass)
router.get('/teacher/day/:id', userController.getTeacherByDay)
router.post('/getInfoByEmail', userController.getInfoByEmail)
router.get('/:id', userController.get)
router.delete('/:id', userController.delete)
router.patch('/changePassword/:id', userController.changePassword)

router.post('/create', userController.create)
router.patch('/:id', userController.update)

module.exports = router