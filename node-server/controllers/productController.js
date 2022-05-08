const { Product, ProductInfo } = require('../models');

const productController = {
  //add product
  test: async (req, res) => {
    try {
      res.send('respond with a resource');
      console.log(Product);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //add product
  create: async (req, res) => {
    try {
      const newProduct = {
        name: req.body.name,
        description: req.body.description,
        //importAt: now(),
      };
      await Product.create(newProduct);
      res.status(200).json('OK');

      console.log(newProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //get all
  getAll: async (req, res) => {
    try {
      const data = await Product.findAll({
        include: [{ model: ProductInfo }],
      });
      res.status(200).send({
        errCode: 0,
        errMsg: 'OK',
        data,
      });
    } catch (error) {
      res.status(500).send({
        errCode: 5,
        errMsg: error.message || 'Loi server',
      });
    }
  },
  //get one
  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      //const data = await Product.findByPk(req.params.id);
      const data = await Product.findOne({
        where: { id: id },
        include: [{ model: ProductInfo }],
      });
      res.status(200).send({
        errCode: 0,
        errMsg: 'OK',
        data,
      });
    } catch (error) {
      res.status(500).send({
        errCode: 5,
        errMsg: error.message || 'Loi server',
      });
    }
  },
  //update
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const product = {
        name: req.body.name,
        description: req.body.description,
      };
      await Product.update(product, { where: { id: id } });
      res.status(200).send({
        errCode: 0,
        errMsg: 'OK',
      });
    } catch (error) {
      res.status(500).send({
        errCode: 5,
        errMsg: error.message || 'Loi server',
      });
    }
  },

  //delOne
  delOne: async (req, res) => {
    try {
      const id = req.params.id;

      await Product.destroy({ where: { id: id } });
      res.status(200).send({
        errCode: 0,
        errMsg: 'OK',
      });
    } catch (error) {
      res.status(500).send({
        errCode: 5,
        errMsg: error.message || 'Loi server',
      });
    }
  },
};

module.exports = productController;
