"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.FLOAT,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      code: {
        type: Sequelize.STRING,
      },
      rating: {
        type: Sequelize.STRING,
      },
      label: {
        type: Sequelize.STRING,
      },
      fabric: {
        type: Sequelize.STRING,
      },
      form: {
        type: Sequelize.STRING,
      },
      banner: {
        type: Sequelize.STRING,
      },
      sold: {
        type: Sequelize.INTEGER,
      },
      tag: {
        type: Sequelize.STRING,
      },
      idCategoryProduct: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Products");
  },
};
