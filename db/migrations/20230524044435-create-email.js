"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("emails", {
      id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
      },
      loggedIn: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("emails");
  },
};
