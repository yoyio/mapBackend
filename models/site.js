'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Site extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Site.belongsTo(models.Company,{foreignKey:'companyId'})
      Site.hasMany(models.Energy,{foreignKey:'siteId'})
      Site.hasMany(models.Crop,{foreignKey:'siteId'})
    }
  }
  Site.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Site',
    tableName:'Sites',
    underscored: true,
  });
  return Site;
};