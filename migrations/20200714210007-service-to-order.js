'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Services', 'order_id', 
    {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: 'Orders',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }
  );  
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Services', 'order_id'
    );
  }
};
