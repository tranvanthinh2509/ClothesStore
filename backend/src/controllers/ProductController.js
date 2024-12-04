const { query } = require("express");
const ProductService = require("../services/ProductService");

const getLimitProduct = async (req, res) => {
  try {
    const { page, categoryProduct = null } = req.query;

    const response = await ProductService.getLimitProduct(page, {
      categoryProduct,
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      msg: "Error in controller : " + error,
    });
  }
};

const getDetailProduct = async (req, res) => {
  try {
    const { pid } = req.params;

    const response = await ProductService.getDetailProduct(pid);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      msg: "Error in controller : " + error,
    });
  }
};
module.exports = {
  getLimitProduct,
  getDetailProduct,
};
