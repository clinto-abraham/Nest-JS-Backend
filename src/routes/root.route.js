module.exports = (app) => {
  const controller = require("../controllers");
  // const middleware = require("../middleware");
  var router = require("express").Router();

  router.get("/", controller.rootController.home);

  app.use("/", router);
};
