'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const companyId=await queryInterface.sequelize.query('SELECT id FROM Companies;',{
      where:{name:'晁陽綠能園區'}
    })

    await queryInterface.bulkInsert('Sites',[{
      name:'晁陽溫室1',
      address:'雲林縣麥寮鄉興華村興華32號',
      company_id:companyId[0][0].id,
      created_at: new Date(),
      updated_at: new Date()
    }],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sites',{})
  }
};
