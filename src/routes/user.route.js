module.exports = (app) => {
  const controller = require("../controllers");
  const { express } = require("../commons");
  // const middleware = require("../middleware");
  var router = express.Router();

  router.get("/", controller.usersController.home);
  router.get("/signing-out", controller.usersController.logout); // Logout
  router.get("/user/:id", controller.usersController.getUserByID);
  router.post("/user", controller.usersController.createUser);

  app.use("/api/v1", router);
};

// router.get(
//   "/profile",
//   requiresAuth(),
//   middleware.userValidate,
//   controller.usersController.profile
// ); // Retrieve a jwt token with email

// router.get(
//   "/api/v1/users",
//   middleware.auth,
//   controller.usersController.getAllUsers
// );
