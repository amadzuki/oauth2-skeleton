const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  try {
    req.accessToken = req.headers.authorization.split(' ')[1]
  } catch (error) {
    res.status(401).send({
      message: 'Token is not provided',
      error: error.toString(),
    })
  }

  try {
    // Verify token with secret
    const verifiedAccessToken = await jwt.verify(
      req.accessToken,
      process.env.JWT_SECRET_KEY
    )
    req.decodedAccessToken = verifiedAccessToken

    // Classify authorization level by account type
    const accountType = req.decodedAccessToken.accountType
    req.accountType = {
      isAdmin: accountType === 'administator' ? true : false,
      isSeller: accountType === 'seller' ? true : false,
    }
    next()
  } catch (error) {
    res
      .status(401)
      .send({ message: 'Token verification failure', error: error })
  }
}
