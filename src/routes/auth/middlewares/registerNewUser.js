const User = require('../../../models').User
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
  if (req.isEmailRegistered) {
    res.status(401).send({
      message: 'This email has already registered.',
      data: { email: req.body.email },
    })
  } else if (req.isUsernameRegistered) {
    res.status(409).send({
      message: 'This username is already taken',
      data: { username: req.body.username },
    })
  } else {
    const saltRounds = 11
    const hash = await bcrypt.hash(req.body.password, saltRounds)
    const newUser = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      hash: hash,
    }

    await User.create(newUser)

    res.status(200).send({
      message: 'User is successfully registered!',
      data: { username: newUser.username, email: newUser.email },
    })
  }
}
