module.exports = async (req, res) => {
  const userData = req.userData
  res.status(200).send({
    message: 'User data',
    data: userData,
  })
}
