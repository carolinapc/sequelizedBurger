
module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 20],
                    msg: "Type a burger name with at least 3 and max 20 characters"
                }
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        } 

    });

    Burger.associate = function (models) {
        Burger.belongsTo(models.Customer);
    }
  
    return Burger;
  };