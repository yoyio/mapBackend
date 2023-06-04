'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('Sites','company_id',{
    type:Sequelize.INTEGER,
    references:{
      model:'Companies',
      key:'id'
    }
   })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('Sites','company_id')
  }
};
