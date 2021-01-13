const express = require('express')
const router = express.Router()
const users = require('./middlewares')

/* GET users listing. */
router.get('/', users.getAll)

module.exports = router
