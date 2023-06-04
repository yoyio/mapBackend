'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Crop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Crop.belongsTo(models.Site,{foreignKey:'siteId'})
    }
  }
  Crop.init({
    cropType: DataTypes.STRING,
    area: DataTypes.INTEGER,
    perOutput: DataTypes.INTEGER,
    totalOutput: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Crop',
    tableName:'Crops',
    underscored: true,
  });
  return Crop;
};