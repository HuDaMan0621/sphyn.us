'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    login_password: DataTypes.TEXT,
    phone_number: DataTypes.TEXT,
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {});
  Customer.associate = function (models) {
    Customer.hasMany(models.Services, { foreignKey: 'customer_id' })
  };
  return Customer;
};