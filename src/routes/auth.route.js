const express = require('express')
const router = express.Router()

const emailValidation = require('../middlewares/emailValidation')
const passwordValidation = require('../middlewares/passwordValidation') 
  
const authController  = require('../controllers/auth.controller')

router.post('/login', authController.login)
router.post('/renew', authController.renewAccessToken)
router.patch('/logout', authController.logout)

module.exports = router