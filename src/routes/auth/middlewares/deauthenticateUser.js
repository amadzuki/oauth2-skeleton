module.exports = async (req, res) => {
  res.status(201).send({
    message: 'User successfully logged out',
  })
}
