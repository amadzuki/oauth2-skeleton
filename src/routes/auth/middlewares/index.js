module.exports = {
  authenticateUser: require('./authenticateUser'),
  deauthenticateUser: require('./deauthenticateUser'),
  getUserData: require('./getUserData'),
  isAuthenticated: require('./isAuthenticated'),
  isTokenVerified: require('./isTokenVerified'),
  isPasswordMatched: require('./isPasswordMatched'),
  isEmailRegistered: require('./isEmailRegistered'),
  isUsernameRegistered: require('./isUsernameRegistered'),
  registerNewUser: require('./registerNewUser'),
  isApiKeyMatched: require('./isApiKeyMatched'),
}
