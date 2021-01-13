const bcrypt = require('bcrypt')

module.exports = async (req, res, next) => {
  if (!req.isEmailRegistered) {
    res
      .status(400)
      .send({ message: 'Email is not registered', error: '400 Bad Request' })
  } else {
    const inputtedPassword = req.body.password
    const hashToCompare = req.user.hash

    const isPasswordMatched = await bcrypt.compare(
      inputtedPassword,
      hashToCompare
    )

    if (isPasswordMatched) {
      next()
    } else {
      res
        .status(401)
        .send({ message: 'Wrong password', error: '401 Unauthorized request' })
    }
  }
}
