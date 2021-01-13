const User = require('../../../models').User

module.exports = async (req, res, next) => {
  const foundUser = await User.findOne({ where: { email: req.body.email } })

  if (foundUser === null) {
    req.isEmailRegistered = false
    next()
  } else {
    req.user = foundUser
    req.isEmailRegistered = true
    next()
  }
}
