const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/getLimitProduct", ProductController.getLimitProduct);
router.get("/getDetailProduct/:pid", ProductController.getDetailProduct);
module.exports = router;
