const { filesController } = require("./files.controller.js");
const { rootController } = require("./root.controller.js");
const { usersController } = require("./users.controller.js");

module.exports = {
  rootController,
  filesController,
  usersController,
};
