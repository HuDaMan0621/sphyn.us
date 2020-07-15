'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Orders', 'service_id', 
    {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: 'Services',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }
  );  
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Orders', 'service_id'
    );
  }
};
