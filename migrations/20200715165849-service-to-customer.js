'use strict';

    module.exports = {
      up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Services', 'customer_id', 
        {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Customers',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );  
    },
    
      down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Services', 'customer_id'
        );
      }
    };

  
