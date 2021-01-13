const User = require('../../../models').User

module.exports = async (req, res, next) => {
  const foundUsername = await User.findOne({
    where: { username: req.body.username },
  })

  if (foundUsername === null) {
    req.isUsernameRegistered = false
    next()
  } else {
    req.isUsernameRegistered = true
    next()
  }
}
