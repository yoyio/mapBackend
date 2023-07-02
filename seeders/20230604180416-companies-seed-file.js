'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Companies',[{
      name:'晁陽綠能園區',
      person:'王曉明',
      tel:'056938238',
      email:'abc123@gmail.com',
      address:'雲林縣麥寮鄉興華村興華32號',
      created_at: new Date(),
      updated_at: new Date()
    }],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Companies',{})
  }
};
