const { Product } = require("../models");

const productController = {
  //add product
  test: async (req, res) => {
    try {
      res.send("respond with a resource");
      console.log(Product);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //add product
  create: async (req, res) => {
    try {
      const newProduct = {
        name: "sadfádf",
        description: req.body.description,
        //importAt: now(),
      };
      //const product = await db.Product.create(newProduct);
      res.send(newProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = productController;
