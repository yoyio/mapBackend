'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const siteId=await queryInterface.sequelize.query('SELECT id FROM Sites;',{
      where:{name:'晁陽溫室1'}
    })
    await queryInterface.bulkInsert('Energies',[{
      energy_type:'太陽光電',
      equipment:'第三型',
      location:'屋頂',
      capacity:'84.24',
      site_id:siteId[0][0].id,
      created_at: new Date(),
      updated_at: new Date()
    }],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Energies',{})
  }
};
