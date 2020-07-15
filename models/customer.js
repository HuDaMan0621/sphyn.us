'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    login_password: DataTypes.TEXT,
    phone_number: DataTypes.TEXT,
  }, {});
  Customer.associate = function(models) {
    Customer.hasMany(models.Order, {foreignKey: 'customer_id'});
    Customer.hasMany(models.Services, {foreignKey: 'customer_id'})
};
  return Customer;
};