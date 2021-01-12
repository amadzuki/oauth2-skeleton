const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.send({
    title: 'OAuth 2.0 Skeleton',
    message: 'Experiment project for various authentication methods',
  })
})

module.exports = router
