'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductInfo.belongsTo(models.Product, {
        foreignKey: 'productId',
        onDelete: 'CASCADE',
      });
    }
  }
  ProductInfo.init(
    {
      productId: DataTypes.INTEGER,
      info: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ProductInfo',
    }
  );
  return ProductInfo;
};
