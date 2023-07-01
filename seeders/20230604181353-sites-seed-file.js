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
      longitude:120.565259,
      latitude:23.701141,
      image:'https://en.pimg.jp/019/005/502/1/19005502.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name:'晁陽溫室2',
      address:'雲林縣麥寮鄉興華村興華32號',
      company_id:companyId[0][0].id,
      longitude:120.580423,
      latitude:23.690351,
      image:'https://en.pimg.jp/019/005/502/1/19005502.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name:'晁陽溫室3',
      address:'雲林縣麥寮鄉興華村興華32號',
      company_id:companyId[0][0].id,
      longitude:120.518156,
      latitude:23.671755,
      image:'https://en.pimg.jp/019/005/502/1/19005502.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name:'晁陽溫室4',
      address:'雲林縣麥寮鄉興華村興華32號',
      company_id:companyId[0][0].id,
      longitude:120.234119,
      latitude:23.754788,
      image:'https://en.pimg.jp/019/005/502/1/19005502.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name:'晁陽溫室5',
      address:'雲林縣麥寮鄉興華村興華32號',
      company_id:companyId[0][0].id,
      longitude:120.219280,
      latitude:23.748530,
      image:'https://en.pimg.jp/019/005/502/1/19005502.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name:'晁陽溫室6',
      address:'雲林縣麥寮鄉興華村興華32號',
      company_id:companyId[0][0].id,
      longitude:120.216290,
      latitude:23.734491,
      image:'https://en.pimg.jp/019/005/502/1/19005502.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name:'晁陽溫室7',
      address:'雲林縣麥寮鄉興華村興華32號',
      company_id:companyId[0][0].id,
      longitude:120.210840,
      latitude:23.711256,
      image:'https://en.pimg.jp/019/005/502/1/19005502.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name:'晁陽溫室8',
      address:'雲林縣麥寮鄉興華村興華32號',
      company_id:companyId[0][0].id,
      longitude:120.230802,
      latitude:23.691766,
      image:'https://en.pimg.jp/019/005/502/1/19005502.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name:'晁陽溫室9',
      address:'雲林縣麥寮鄉興華村興華32號',
      company_id:companyId[0][0].id,
      longitude:120.247734,
      latitude:23.709247,
      image:'https://en.pimg.jp/019/005/502/1/19005502.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name:'晁陽溫室10',
      address:'雲林縣麥寮鄉興華村興華32號',
      company_id:companyId[0][0].id,
      longitude:120.278924,
      latitude:23.705425,
      image:'https://en.pimg.jp/019/005/502/1/19005502.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name:'晁陽溫室11',
      address:'雲林縣麥寮鄉興華村興華32號',
      company_id:companyId[0][0].id,
      longitude:120.287170,
      latitude:23.720341,
      image:'https://en.pimg.jp/019/005/502/1/19005502.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name:'晁陽溫室12',
      address:'雲林縣麥寮鄉興華村興華32號',
      company_id:companyId[0][0].id,
      longitude:120.273102,
      latitude:23.729799,
      image:'https://en.pimg.jp/019/005/502/1/19005502.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name:'晁陽溫室13',
      address:'雲林縣麥寮鄉興華村興華32號',
      company_id:companyId[0][0].id,
      longitude:120.289587,
      latitude:23.740785,
      image:'https://en.pimg.jp/019/005/502/1/19005502.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name:'晁陽溫室14',
      address:'雲林縣麥寮鄉興華村興華32號',
      company_id:companyId[0][0].id,
      longitude:120.216290,
      latitude:23.747530,
      image:'https://en.pimg.jp/019/005/502/1/19005502.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name:'晁陽溫室15',
      address:'雲林縣麥寮鄉興華村興華32號',
      company_id:companyId[0][0].id,
      longitude:120.219280,
      latitude:23.734799,
      image:'https://en.pimg.jp/019/005/502/1/19005502.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name:'晁陽溫室16',
      address:'雲林縣麥寮鄉興華村興華32號',
      company_id:companyId[0][0].id,
      longitude:120.216290,
      latitude:23.731556,
      image:'https://en.pimg.jp/019/005/502/1/19005502.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name:'晁陽溫室17',
      address:'雲林縣麥寮鄉興華村興華32號',
      company_id:companyId[0][0].id,
      longitude:120.277554,
      latitude:23.705487,
      image:'https://en.pimg.jp/019/005/502/1/19005502.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name:'晁陽溫室18',
      address:'雲林縣麥寮鄉興華村興華32號',
      company_id:companyId[0][0].id,
      longitude:120.273589,
      latitude:23.728799,
      image:'https://en.pimg.jp/019/005/502/1/19005502.jpg',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name:'晁陽溫室19',
      address:'雲林縣麥寮鄉興華村興華32號',
      company_id:companyId[0][0].id,
      longitude:120.709225,
      latitude:23.245877,
      image:'https://en.pimg.jp/019/005/502/1/19005502.jpg',
      created_at: new Date(),
      updated_at: new Date()
    }],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sites',{})
  }
};
