const userController = require('../user/controllers/user.controller')
const express = require('express')
const { checkToken } = require('../../middlewares/token-authen')

const router = express.Router()

router.post('/', userController.createUser)
router.get('/', checkToken, userController.getAllUser)

module.exports = router
