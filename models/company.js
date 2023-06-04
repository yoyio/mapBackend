'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.hasMany(models.Site,{foreignKey:'companyId'})
    }
  }
  Company.init({
    name: DataTypes.STRING,
    person: DataTypes.STRING,
    tel: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
    tableName:'Companies',
    underscored: true,
  });
  return Company;
};