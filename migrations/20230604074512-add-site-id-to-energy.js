'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Energies','site_id',{
    type:Sequelize.INTEGER,
    references:{
      model:'Sites',
      key:'id'
    }
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Energies','site_id')
     
  }
};
