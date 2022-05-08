const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

//add a product
router.post('/', productController.create);
router.get('/', productController.getAll);
router.get('/:id', productController.getOne);
router.put('/:id', productController.update);
router.delete('/:id', productController.delOne);
module.exports = router;
