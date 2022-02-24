'use strict';
const fs=require('fs');
module.exports = {
   up (queryInterface, Sequelize) {
   
     let data = fs.readFileSync('./data/post.json','utf8')
     data = JSON.parse(data)
     data.map(el=>{
      delete el.id
       el.createdAt = new Date()
       el.updatedAt = new Date()
       return el;
     })
     return queryInterface.bulkInsert("Posts",data,{})
  },

   down (queryInterface, Sequelize) {
   
     return queryInterface.bulkDelete("Posts",null,{})
  }
};
