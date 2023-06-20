const db = require("../models");

exports.sequelizeInstance = async () => {
  db.sequelize
    .sync()
    .then(() => {
      console.dir("Synced db.");
    })
    .catch((err) => {
      console.dir("Failed to sync db: " + err.message);
    });
  try {
    await db.sequelize.authenticate();
    console.dir(
      "Postgresql Database connection established with respect to sequelize ORM on local postgres server 5432."
    );
  } catch (e) {
    console.dir("Database connection failed", e);
    process.exit(1);
  }
};
