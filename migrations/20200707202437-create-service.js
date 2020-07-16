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
      nick_name:{
        type: Sequelize.TEXT
      },
      sq_ft:{
        type: Sequelize.TEXT
      },
      address:{
        type: Sequelize.TEXT
      },
      city:{
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
      order_id: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      customer_id: {
        allowNull: true,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Services');
  }
};