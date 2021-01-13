const User = require('../../../models').User

module.exports = async (req, res, next) => {
  const foundEmail = await User.findOne({ where: { email: req.body.email } })

  if (foundEmail === null) {
    req.isEmailRegistered = false
    next()
  } else {
    req.isEmailRegistered = true
    next()
  }
}
