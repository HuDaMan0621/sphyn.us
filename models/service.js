'use strict';
module.exports = (sequelize, DataTypes) => {
  const Services = sequelize.define('Services', {
    nick_name: DataTypes.TEXT,
    sq_ft: DataTypes.TEXT,
    address: DataTypes.TEXT,
    city: DataTypes.TEXT,
    state: DataTypes.TEXT,
    zipcode: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
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
    payment_id: DataTypes.STRING,

    service_date: DataTypes.DATE
  }, {});
  Services.associate = function (models) {
    Services.belongsTo(models.Customer, { foreignKey: 'customer_id' });
  };

  return Services;
};
