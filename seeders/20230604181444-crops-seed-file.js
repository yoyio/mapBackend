'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const siteId = await queryInterface.sequelize.query(
      'SELECT id FROM Sites WHERE address = :address;',
        {
          replacements: { address: '雲林縣麥寮鄉興華村興華32號' },
          type: queryInterface.sequelize.QueryTypes.SELECT
        }
      );
    await queryInterface.bulkInsert('Crops',[{
      crop_type:'嫩薑',
      area:1,
      per_output:0.6,
      total_output:12,
      site_id:siteId[0].id,
      created_at: new Date(),
      updated_at: new Date()
    },{
      crop_type:'老薑',
      area:1,
      per_output:0.6,
      total_output:15,
      site_id:siteId[1].id,
      created_at: new Date(),
      updated_at: new Date()
    },{
      crop_type:'嫩薑',
      area:1,
      per_output:0.6,
      total_output:12,
      site_id:siteId[2].id,
      created_at: new Date(),
      updated_at: new Date()
    },{
      crop_type:'老薑',
      area:1,
      per_output:0.6,
      total_output:15,
      site_id:siteId[3].id,
      created_at: new Date(),
      updated_at: new Date()
    },{
      crop_type:'嫩薑',
      area:1,
      per_output:0.6,
      total_output:12,
      site_id:siteId[4].id,
      created_at: new Date(),
      updated_at: new Date()
    },{
      crop_type:'老薑',
      area:1,
      per_output:0.6,
      total_output:15,
      site_id:siteId[5].id,
      created_at: new Date(),
      updated_at: new Date()
    },{
      crop_type:'嫩薑',
      area:1,
      per_output:0.6,
      total_output:12,
      site_id:siteId[6].id,
      created_at: new Date(),
      updated_at: new Date()
    },{
      crop_type:'老薑',
      area:1,
      per_output:0.6,
      total_output:15,
      site_id:siteId[7].id,
      created_at: new Date(),
      updated_at: new Date()
    },{
      crop_type:'嫩薑',
      area:1,
      per_output:0.6,
      total_output:12,
      site_id:siteId[8].id,
      created_at: new Date(),
      updated_at: new Date()
    },{
      crop_type:'老薑',
      area:1,
      per_output:0.6,
      total_output:15,
      site_id:siteId[9].id,
      created_at: new Date(),
      updated_at: new Date()
    },{
      crop_type:'嫩薑',
      area:1,
      per_output:0.6,
      total_output:12,
      site_id:siteId[10].id,
      created_at: new Date(),
      updated_at: new Date()
    },{
      crop_type:'老薑',
      area:1,
      per_output:0.6,
      total_output:15,
      site_id:siteId[11].id,
      created_at: new Date(),
      updated_at: new Date()
    },{
      crop_type:'嫩薑',
      area:1,
      per_output:0.6,
      total_output:12,
      site_id:siteId[12].id,
      created_at: new Date(),
      updated_at: new Date()
    },{
      crop_type:'老薑',
      area:1,
      per_output:0.6,
      total_output:15,
      site_id:siteId[13].id,
      created_at: new Date(),
      updated_at: new Date()
    },{
      crop_type:'嫩薑',
      area:1,
      per_output:0.6,
      total_output:12,
      site_id:siteId[14].id,
      created_at: new Date(),
      updated_at: new Date()
    },{
      crop_type:'老薑',
      area:1,
      per_output:0.6,
      total_output:15,
      site_id:siteId[15].id,
      created_at: new Date(),
      updated_at: new Date()
    },{
      crop_type:'嫩薑',
      area:1,
      per_output:0.6,
      total_output:12,
      site_id:siteId[16].id,
      created_at: new Date(),
      updated_at: new Date()
    },{
      crop_type:'老薑',
      area:1,
      per_output:0.6,
      total_output:15,
      site_id:siteId[17].id,
      created_at: new Date(),
      updated_at: new Date()
    },{
      crop_type:'嫩薑',
      area:1,
      per_output:0.6,
      total_output:12,
      site_id:siteId[18].id,
      created_at: new Date(),
      updated_at: new Date()
    }],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Crops',{})
  }
};
