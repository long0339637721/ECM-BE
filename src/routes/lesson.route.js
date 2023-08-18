const express = require('express')
const router = express.Router()
const lessonController = require('../controllers/lesson.controller')

router.get('/all', lessonController.getAll)
router.get('/:id', lessonController.get)
router.delete('/:id', lessonController.delete)
router.get('/teacher/:id', lessonController.getByTeacher)
router.get('/day/:day', lessonController.getDay)
router.post('/create', lessonController.create)
router.patch('/:id', lessonController.update)

router.get('/hoc/present', lessonController.getStudentPresent)
router.get('/hoc/:id', lessonController.getHoc)
router.post('/hoc/create', lessonController.createHoc)
router.patch('/hoc/:id', lessonController.updateHoc)

module.exports = router