const express = require('express')
const router = express.Router()
const roomController = require('../controllers/room.controller')

router.get('/all', roomController.getAll)
router.get('/:id', roomController.get)
router.delete('/:id', roomController.delete)
router.post('/create', roomController.create)
router.patch('/:id', roomController.update)

module.exports = router