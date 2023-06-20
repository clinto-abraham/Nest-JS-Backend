const { auth } = require("./auth.js");
const { fileValidate } = require("./fileValidate.js");
const { paramsIdChecks } = require("./paramsIdChecks.js");
const { userValidate } = require("./userValidate.js");
const { methodNotAllowed } = require("./methodNotAllowed.js");

module.exports = {
  auth,
  fileValidate,
  paramsIdChecks,
  userValidate,
  methodNotAllowed,
};
