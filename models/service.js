'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    sq_ft: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  Service.associate = function(models) {
    Service.belongsToMany(models.Order, { through: 'OrderService' })
  };
  return Service;
};