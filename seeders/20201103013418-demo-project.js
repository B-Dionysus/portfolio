'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Projects', [{
      title:"Project 1", 
      about:"Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?", 
      displayName:"P. Two",  
      externalLink:"www.github.com",
      thumbnail:"https://via.placeholder.com/150",   
      displayOrder:1,        
      CategoryId:2,
      StatusId:1, 
      UserId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:"Project 2", 
      about:"Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?", 
      displayName:"P. Two",  
      externalLink:"www.github.com",
      thumbnail:"https://via.placeholder.com/150",   
      displayOrder:2,        
      CategoryId:2,
      StatusId:1, 
      UserId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Projects', null, {});  }
};
