var orm = require("../config/orm");
const TABLE = "burgers";

var burger = {
    //retrieves all the burgers ordered by name
    all: function (cb) {
        orm.selectAll(TABLE, "burger_name", res => cb(res));
    },

    //creates a new row with the burger name passed
    create: function (name, cb) {
        var cols = { burger_name: name };
        orm.insertOne(TABLE, cols, res => cb(res));
    },

    //updates the devoured column to true
    devour: function (id, cb) {
        var cols = { devoured: true };
        var conditions = { id: id };

        orm.updateOne(TABLE, cols, conditions, res => cb(res));
    }
};

module.exports = burger;