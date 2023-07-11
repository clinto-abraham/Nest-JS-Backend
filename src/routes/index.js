module.exports = (app) => {
  require("./dockets.route")(app);
  require("./user.route")(app);
  // require("./test.route")(app);
};
