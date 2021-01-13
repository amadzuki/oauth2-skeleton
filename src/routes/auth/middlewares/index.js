module.exports = {
  authenticateUser: require('./authenticateUser'),
  deauthenticateUser: require('./deauthenticateUser'),
  getUserData: require('./getUserData'),
  isAuthenticated: require('./isAuthenticated'),
  isAuthorized: require('./isAuthorized'),
  isPasswordMatched: require('./isPasswordMatched'),
  isEmailRegistered: require('./isEmailRegistered'),
  isUsernameRegistered: require('./isUsernameRegistered'),
  registerNewUser: require('./registerNewUser'),
  isApiKeyMatched: require('./isApiKeyMatched'),
}
