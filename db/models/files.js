'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class files extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  files.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    caption: {
      // type: DataTypes.STRING(255),
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      // type: DataTypes.STRING(64),
      type: DataTypes.STRING,
      unique: false,
      allowNull: true
    },
    originalname: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: true
    },
    // userID: {
    //     type: DataTypes.STRING,
    //     references: {
    //     model: 'user',
    //     key: 'id'
    //     }
    // },
  }, {
    sequelize,
    modelName: 'files',
    paranoid: true,
    deletedAt: 'destroyTime'     // If you want to give a custom name to the deletedAt column
  });
  return files;
};

