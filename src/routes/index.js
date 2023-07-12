module.exports = (app) => {
  // require("./file.route")(app);
  require("./user.route")(app);
  require("./root.route")(app);
  require("./docket.route")(app);
};
