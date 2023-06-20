module.exports = (app) => {
  require("./file.route")(app);
  require("./user.route")(app);
  require("./test.route")(app);
};
