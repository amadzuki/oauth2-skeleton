const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send({ title: 'List of users' })
})

module.exports = router
