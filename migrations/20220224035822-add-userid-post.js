'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    
    return queryInterface.addColumn(
      'Posts',
      'UserId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users'
          },
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    )
    
  },

  
  
  down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'Posts',
      'UserId',
      {}
    )
  },

  
};