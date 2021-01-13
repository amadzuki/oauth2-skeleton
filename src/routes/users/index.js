const express = require('express')
const router = express.Router()
const users = require('./middlewares')
const auth = require('../auth/middlewares')

/* GET users listing. */
router.get('/', auth.isApiKeyMatched, users.getAll)

module.exports = router
