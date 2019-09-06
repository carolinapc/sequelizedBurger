module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 20],
                    msg: "Type a customer name with at least 1 and max 20 characters"
                }
            }
        }
    });
  
    return Customer;
  };