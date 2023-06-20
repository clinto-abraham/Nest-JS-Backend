exports.generateID = (bytes = 32) => {
  const { crypto } = require("./index");
  return crypto.randomBytes(bytes).toString("hex");
};
