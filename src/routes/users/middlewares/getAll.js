const User = require('../../../models').User

module.exports = async (req, res) => {
  const users = await User.findAll()

  res.status(200).send({ message: 'List of users', data: users })
}
