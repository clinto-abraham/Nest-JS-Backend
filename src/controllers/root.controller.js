exports.rootController = class rootController {
  static async home(req, res) {
    // res.status(201).json({ message: "Welcome to express.js application" });
    res.render("home");
  }
};
