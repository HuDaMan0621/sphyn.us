'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      completed: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      reschedule: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      schedule_confirm: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      payment_received: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      service_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};