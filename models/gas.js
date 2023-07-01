'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Gas.belongsTo(models.Site,{foreignKey:'siteId'})
    }
  }
  Gas.init({
    emissions: DataTypes.FLOAT,
    reduction: DataTypes.FLOAT,
    siteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Gas',
    tableName:'Gases',
    underscored: true,
  });
  return Gas;
};