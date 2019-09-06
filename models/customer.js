module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
  
    return Customer;
  };