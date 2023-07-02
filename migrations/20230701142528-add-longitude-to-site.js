'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Sites','longitude',{
      type:Sequelize.FLOAT(9,6)
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Sites','longitude')
  }
};
