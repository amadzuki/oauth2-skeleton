const express = require('express')
const router = express.Router()
const auth = require('./middlewares')

// Register
router.post(
  '/register',
  auth.isEmailRegistered,
  auth.isUsernameRegistered,
  auth.registerNewUser
)

// Login
router.post(
  '/login',
  auth.isEmailRegistered,
  auth.isPasswordMatched,
  auth.authenticateUser
)

// Logout
router.post('/logout', auth.isTokenVerified, auth.deauthenticateUser)

// Get user's data
router.get(
  '/:username',
  auth.isTokenVerified,
  auth.isAuthenticated,
  auth.getUserData
)

module.exports = router
