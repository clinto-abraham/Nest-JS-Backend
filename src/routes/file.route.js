// module.exports = (app) => {
//   const controller = require("../controllers");
//   var router = require("express").Router();
//   const middleware = require("../middleware");

//   router
//     .post(
//       "/files",
//       middleware.auth,
//       middleware.fileValidate,
//       controller.filesController.createFile
//     )
//     .all(middleware.methodNotAllowed); // Create a new files

//   router.get("/files", middleware.auth, controller.filesController.getAllFiles); // Retrieve all published files

//   router.get(
//     "/files/:id",
//     middleware.auth,
//     middleware.paramsIdChecks,
//     controller.filesController.getFileByID
//   ); // Retrieve a single file with id

//   router.put(
//     "/files/:id",
//     middleware.auth,
//     middleware.paramsIdChecks,
//     middleware.fileValidate,
//     controller.filesController.updateFileByID
//   ); // update file with imageName as params/id

//   router.delete(
//     "/files/:id",
//     middleware.auth,
//     middleware.paramsIdChecks,
//     controller.filesController.deleteFileByID
//   ); // delete file with imageName as params/id

//   router.post(
//     "/files/delete-all",
//     middleware.auth,
//     controller.filesController.deleteAllFiles
//   ); // delete All files

//   app.use("/api/v1", router);
// };

// router.post('/files', middleware.auth, middleware.fileValidate, controller.createFile); // Create a new files
// router.get('/files', middleware.auth, controller.getAllFiles); // Retrieve all published files
// router.get('/files/:id', middleware.auth, middleware.paramsIdChecks, controller.getFileByID); // Retrieve a single file with id
// router.put('/files/:id', middleware.auth, middleware.paramsIdChecks, middleware.fileValidate, controller.updateFile); // update file with imageName as params/id
// router.delete('/files/:id', middleware.auth, middleware.paramsIdChecks, controller.deleteFileByID); // delete file with imageName as params/id
// router.post('/files/delete-all', middleware.auth, controller.deleteAllFiles); // delete All files
