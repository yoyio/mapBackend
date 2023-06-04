'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const siteId=await queryInterface.sequelize.query('SELECT id FROM Sites;',{
      where:{name:'晁陽溫室1'}
    })
    await queryInterface.bulkInsert('Crops',[{
      crop_type:'嫩薑',
      area:1,
      per_output:0.6,
      total_output:12,
      site_id:siteId[0][0].id,
      created_at: new Date(),
      updated_at: new Date()
    }],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Crops',{})
  }
};
