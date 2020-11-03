'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Statuses', [{
      type:"Portfolio", 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type:"Private", 
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Statuses', null, {});  }
};
