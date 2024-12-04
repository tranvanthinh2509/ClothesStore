const db = require("../models");
const { Op, where } = require("sequelize");
const { Sequelize } = require("sequelize");

const getLimitProduct = (page, { categoryProduct }) => {
  return new Promise(async (resolve, reject) => {
    try {
      let queries = {};
      let offset = !page || +page <= 1 ? 0 : +page - 1;

      if (categoryProduct) queries.idCategory = categoryProduct;

      const products = await db.Product.findAndCountAll({
        offset: offset * +process.env.LIMIT,
        limit: +process.env.LIMIT,
        distinct: true,

        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            where: queries,
            model: db.CategoryProduct,
            as: "CategoryProducts",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },

          //   {
          //     model: db.ProductImage,
          //     as: "images",
          //     attributes: ["idProduct", "urlImage"],
          //   },
          //   {
          //     model: db.ProductDetail,
          //     as: "productdetails",
          //     attributes: ["idProduct", "quantity", "color", "size"],
          //   },
        ],
      });

      resolve({
        status: products ? "OK" : "ERR",
        // limit: +process.env.limit,
        // page: offset + 1,
        data: products,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetailProduct = (pid) => {
  return new Promise(async (resolve, reject) => {
    try {
      const products = await db.Product.findOne({
        where: { id: pid },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: db.ProductImage,
            as: "images",
            attributes: ["idProduct", "urlImage"],
          },
          {
            model: db.ProductDetail,
            as: "productdetails",
            attributes: ["idProduct", "quantity", "color", "size"],
          },
        ],
      });

      resolve({
        status: products ? "OK" : "ERR",
        // limit: +process.env.limit,
        // page: offset + 1,
        data: products,
      });
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  getLimitProduct,
  getDetailProduct,
};
