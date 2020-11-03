'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [{
      title:"Benjamin Dionysus", 
      about:"Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?", 
      tabName:"Main Page", 
      thumbnail:"./assets/img/mainPhoto.2b.png", 
      addedBy:1,
      status:1,
      displayOrder:1,         
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:"Web Development", 
      about:"Full stack web development projects. HTML, CSS, JS, mySQL, and so on.", 
      tabName:"Web Dev", 
      thumbnail:"https://via.placeholder.com/150", 
      addedBy:1,
      status:1,
      displayOrder:2,         
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});  }
};
