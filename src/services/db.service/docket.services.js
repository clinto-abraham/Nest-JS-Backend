const { dataConversion } = require("../../commons");
const db = require("../../../db/models");
const FilesModel = db.files;
exports.fileServices = class fileServices {
  static async findAll(res) {
    try {
      return dataConversion(await FilesModel.findAll());
    } catch (error) {
      return res.status(500).json({
        message: `Some error occurred while fetching all data with respect to FilesModel.`,
        error,
      });
    }
  }

  static async findByQuery(res, id) {
    try {
      return dataConversion(await FilesModel.findOne({ where: { id } }));
    } catch (error) {
      return res.status(500).json({
        message: `Some error occurred while fetching data with id: ${id} in the params and with respect to model: FilesModel.`,
        error,
      });
    }
  }

  static async updateByQuery(res, id, body) {
    const { caption, title } = body;
    try {
      return dataConversion(
        await FilesModel.update(
          {
            caption,
            title,
          },
          { where: { id } }
        )
      );
    } catch (error) {
      return res.status(500).json({
        message: `Some error occurred while updating data with id: ${id} in the params and with respect to model: FilesModel.`,
        error,
      });
    }
  }

  static async findByOriginalname(res, originalname) {
    try {
      return dataConversion(
        await FilesModel.findOne({ where: { originalname } })
      );
    } catch (error) {
      return res.status(500).json({
        message: `Some error occurred while fetching data with title: ${title} in the params and with respect to model: FilesModel.`,
        error,
      });
    }
  }

  static async create(res, id, body, originalname) {
    const { caption, title } = body;
    try {
      return dataConversion(
        await FilesModel.create({
          id,
          caption,
          title: title ? title : originalname,
          originalname,
        })
      );
    } catch (error) {
      return res.status(500).json({
        message: `Some error occurred while creating file with id: ${id} with respect to model: FilesModel.`,
        error,
      });
    }
  }

  static async deleteByQuery(id) {
    try {
      return dataConversion(await FilesModel.destroy({ where: { id } }));
    } catch (error) {
      return res.status(500).json({
        message: `Some error occurred while deleting data with id: ${id} in the params and with respect to model: FilesModel.`,
        error,
      });
    }
  }

  static async deleteAll(res) {
    try {
      const deleted = await FilesModel.destroy({
        where: {},
        truncate: true,
      });
      return deleted;
    } catch (error) {
      return res.status(500).json({
        message: `There are no data to be deleted or some error occurred while deleting all data with respect to model: FilesModel.`,
        error,
      });
    }
  }
};
