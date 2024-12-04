"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CategoryProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CategoryProduct.belongsTo(models.Category, {
        foreignKey: "idCategory",
        targetKey: "id",
        as: "categories",
      });
      CategoryProduct.hasMany(models.Product, {
        foreignKey: "idCategoryProduct",
        as: "CategoryProducts",
      });
    }
  }
  CategoryProduct.init(
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      idCategory: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CategoryProduct",
    }
  );
  return CategoryProduct;
};
