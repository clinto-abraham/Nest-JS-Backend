// const { AUTH0_SECRET, EXPRESS_APP_BASE_URL, AUTH0_CLIENT_ID, AUTH0_ISSUER_BASE_URL } = require('../../environments');
const dotenv = require("dotenv");
// const { express } = require("../../commons");
dotenv.config();

// const app = express();
// console.log(
//   process.env.EXPRESS_APP_BASE_URL,
//   "process.env.EXPRESS_APP_BASE_URL",
//   app.locals.settings.env
// );
exports.auth0config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: process.env.EXPRESS_APP_BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
};
