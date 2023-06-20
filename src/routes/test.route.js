module.exports = (app) => {
  const controller = require("../controllers");
  const middleware = require("../middleware");
  var router = require("express").Router();

  router.post(
    "/pdf",
    // middleware.auth,
    // middleware.userValidate,
    controller.testController.pdfManager
    //   pdfExtract
  );
  // .all(middleware.methodNotAllowed); // Create a new user

  app.use("/", router);
};
