module.exports = (app) => {
  const controller = require("../controllers");
  var router = require("express").Router();
  const middleware = require("../middleware");

  router
    .post(
      "/accounts",
      middleware.auth,
      middleware.fileValidate,
      controller.filesController.createFile
    )
    .all(middleware.methodNotAllowed); // Create a new files

  router.get(
    "/accounts",
    middleware.auth,
    controller.filesController.getAllFiles
  ); // Retrieve all published files

  router.get(
    "/accounts/:id",
    middleware.auth,
    middleware.paramsIdChecks,
    controller.filesController.getFileByID
  ); // Retrieve a single file with id

  router.put(
    "/accounts/:id",
    middleware.auth,
    middleware.paramsIdChecks,
    middleware.fileValidate,
    controller.filesController.updateFileByID
  ); // update file with imageName as params/id

  router.delete(
    "/accounts/:id",
    middleware.auth,
    middleware.paramsIdChecks,
    controller.filesController.deleteFileByID
  ); // delete file with imageName as params/id

  router.post(
    "/accounts/delete-all",
    middleware.auth,
    controller.filesController.deleteAllFiles
  ); // delete All files

  app.use("/api/v1/dockets", router);
};

// router.post('/accounts', middleware.auth, middleware.fileValidate, controller.createFile); // Create a new files
// router.get('/accounts', middleware.auth, controller.getAllFiles); // Retrieve all published files
// router.get('/accounts/:id', middleware.auth, middleware.paramsIdChecks, controller.getFileByID); // Retrieve a single file with id
// router.put('/accounts/:id', middleware.auth, middleware.paramsIdChecks, middleware.fileValidate, controller.updateFile); // update file with imageName as params/id
// router.delete('/accounts/:id', middleware.auth, middleware.paramsIdChecks, controller.deleteFileByID); // delete file with imageName as params/id
// router.post('/accounts/delete-all', middleware.auth, controller.deleteAllFiles); // delete All files
