module.exports = (app) => {
  const controller = require("../controllers");
  const { requiresAuth, express } = require("../commons");
  const middleware = require("../middleware");
  var router = express.Router();

  router.get(
    "/",
    controller.usersController.home
  );

  router.get(
    "/signing-out",
    requiresAuth(),
    controller.usersController.logout
  ); // Logout

  router.get(
    "/profile",
    requiresAuth(),
    middleware.userValidate,
    controller.usersController.profile
  ); // Retrieve a jwt token with email

  router.get(
    "/api/v1/users",
    middleware.auth,
    controller.usersController.getAllUsers
  );

  app.use("/", router);
};
