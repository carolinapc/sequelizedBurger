module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
  
    Customer.associate = function(models) {
      Customer.hasOne(models.Burger,{as: "customer"});
    };
  
    return Customer;
  };