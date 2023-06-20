const { jwt } = require("../commons");
const { AUTH0_SECRET } = require("../environments");
const { userServices } = require("../services/db.service/user.services");

exports.auth = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      const { email } = jwt.verify(token, AUTH0_SECRET);
      const foundUser = await userServices.findByEmailDB(email, res);

      if (foundUser?.loggedIn) {
        next();
      } else {
        return res.status(406).json({
          message:
            "Your jwt token has expired, or session has signed out. Kindly sign in or sign up - to interact with system or due to security concern, you are locked out!",
        });
      }
    } else {
      return res
        .status(401)
        .json({ message: "No token in headers or provided!" });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Unknown Error  while authenticating with respect jwt token",
      error,
    });
  }
};
