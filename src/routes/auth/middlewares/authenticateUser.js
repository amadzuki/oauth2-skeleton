const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
  const payload = {
    id: req.user.id,
    accountType: 'seller',
  }
  const jwtSecret = process.env.JWT_SECRET_KEY

  // Remember to use a minimum 32 byte for the secret key as a rule of thumb
  const accessToken = await jwt.sign(payload, jwtSecret, { expiresIn: '24h' })

  res.status(200).send({
    message: 'Authentication successful',
    data: { accessToken: accessToken },
  })
}
