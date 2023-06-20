const { AUTH0_SECRET, EXPRESS_APP_BASE_URL, AUTH0_CLIENT_ID, AUTH0_ISSUER_BASE_URL } = require('../../environments');
  
exports.auth0config = {
  authRequired: false,
  auth0Logout: true,
  secret: AUTH0_SECRET,
  baseURL: EXPRESS_APP_BASE_URL,
  clientID: AUTH0_CLIENT_ID,
  issuerBaseURL: AUTH0_ISSUER_BASE_URL
}