const { fileServices } = require("../services/db.service/file.services");

exports.paramsIdChecks = async (req, res, next) => {
  const id = req.params.id;
  if (id === ":id") {
    return res.status(500).json({
      message: `No params was sent! Kindly send the id in the params.`,
    });
  }
  if (id) {
    const dataPostgresDB = await fileServices.findByQuery(res, id);
    if (!dataPostgresDB) {
      return res.status(404).json({
        message: `No file with id : ${id}`,
        dataPostgresDB,
      });
    }
  }

  next();
};
