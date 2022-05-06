const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

//add a product
router.post("/", productController.create);
router.get("/", productController.test);
module.exports = router;
