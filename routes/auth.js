const express = require('express')
const authController = require('../controllers/auth')

const router = express.Router()

router.get('/login', authController.getLoginPage)
router.post('/login', authController.postLoginPage)
router.post('/logintwo', authController.postLoginPageTwo)
router.get('/signin', authController.getSigninPage)
router.post('/signin', authController.postSigninPage)
router.post('/personal', authController.postPersonalPage)
router.post('/personaltwo', authController.postVerifyPage)
router.post('/verify', authController.getVerify)

module.exports = router;