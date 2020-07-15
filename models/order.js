'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    reschedule: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    schedule_confirm: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    payment_received: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    service_date: DataTypes.DATE
    
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.Customer, {foreignKey: 'customer_id'});
    Order.belongsTo(models.Services, {foreignKey: 'order_id'});
  };
  return Order;
};