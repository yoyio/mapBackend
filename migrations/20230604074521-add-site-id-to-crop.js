'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Crops','site_id',{
    type:Sequelize.INTEGER,
    references:{
      model:'Sites',
      key:'id'
    }
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Crops','site_id')
  }
};
