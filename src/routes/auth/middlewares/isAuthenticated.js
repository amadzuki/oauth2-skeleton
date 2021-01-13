const User = require('../../../models').User

module.exports = async (req, res, next) => {
  const paramsUsername = req.params.username
  const userData = await User.findByPk(+req.decodedAccessToken.id)
  if (userData === null) {
    res
      .status(404)
      .send({
        message: 'User is not found',
        error: 'ID is not exist in database',
      })
  } else {
    const tokenUsername = userData.username

    if (tokenUsername === paramsUsername) {
      req.isAuthenticated = true
      req.userData = userData
      next()
    } else {
      res.status(401).send({
        message: 'User authentication failure',
        error: 'Token is not matched with username',
      })
    }
  }
}
