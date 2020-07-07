'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    completed: DataTypes.BOOLEAN,
    reschedule: DataTypes.BOOLEAN,
    schedule_confirm: DataTypes.BOOLEAN
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.Customer),
    Order.hasMany(model.Service)
  };
  return Order;
};