'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    login_name: DataTypes.TEXT,
    login_password: DataTypes.TEXT,
    phone_number: DataTypes.INTEGER,
    address_line_1: DataTypes.TEXT,
    address_line_2: DataTypes.TEXT,
    address_line_3: DataTypes.TEXT,
    city: DataTypes.TEXT,
    state: DataTypes.TEXT,
    zipcode: DataTypes.INTEGER
  }, {});
  Customer.associate = function(models) {
  Customer.belongsToMany(models.Order, { through: 'CustomerOrder' });  
};
  return Customer;
};