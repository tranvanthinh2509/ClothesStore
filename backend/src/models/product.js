"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
      content: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      featured: DataTypes.STRING,
      tag: DataTypes.STRING,
      rating: DataTypes.STRING,
      idCategoryProduct: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
