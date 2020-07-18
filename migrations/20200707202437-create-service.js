'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nick_name: {
        type: Sequelize.TEXT
      },
      sq_ft: {
        type: Sequelize.TEXT
      },
      address: {
        type: Sequelize.TEXT
      },
      city: {
        type: Sequelize.TEXT
      },
      state: {
        type: Sequelize.TEXT
      },
      zipcode: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      customer_id: {
        allowNull: true,
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
      payment_id: {
        type: Sequelize.STRING,
      },
      service_date: {
        type: Sequelize.DATE
      },
      img_url: {
        type: Sequelize.TEXT,
      },
      matterport: {
        allowNull: false,
        type: Sequelize.TEXT,
        defaultValue: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Services');
  }
};