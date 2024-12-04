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
      Product.belongsTo(models.CategoryProduct, {
        foreignKey: "idCategoryProduct",
        targetKey: "id",
        as: "CategoryProducts",
      });

      Product.hasMany(models.ProductImage, {
        foreignKey: "idProduct",
        as: "images",
      });

      Product.hasMany(models.ProductDetail, {
        foreignKey: "idProduct",
        as: "productdetails",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
      quantity: DataTypes.INTEGER,
      code: DataTypes.STRING,
      rating: DataTypes.STRING,
      label: DataTypes.STRING,
      fabric: DataTypes.STRING,
      form: DataTypes.STRING,
      banner: DataTypes.STRING,
      sold: DataTypes.INTEGER,
      tag: DataTypes.STRING,
      idCategoryProduct: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
