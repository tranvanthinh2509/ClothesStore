const express = require("express");
const router = express.Router();
const insert = require("../controllers/insert");

router.post("/insert", insert.registerUser);

module.exports = router;
