var db = require("../models");

module.exports = function (app) {
    //select all
    app.get("/", (req, res) => {
        db.Burger.findAll({}).then(function (data) {
            res.render("index", { burgers: data });
        });
    });

    //creates new burger
    app.post("/api/burgers", (req, res) => {
        db.Burger.create(req.body).then(result => {
            res.redirect("/");
        });
    });

    //devour an burger
    app.put("/api/burgers", (req, res) => {

        var devourBurger = (customerId) => {
            db.Burger.update({
                devoured: true,
                customerId: customerId
            },
            {
                where: {
                    id: req.body.id
                }
            }).then(result => {
                if (result.changedRows === 0) {
                    console.log(req.body.id);
                    res.status(404).end();
                }
                else {
                    res.status(200).end();
                }
            });
        };

        //search for a customer
        db.Customer.findOne({
            where: {
                name: req.body.name
            }
        }).then(result => {
            //if customer exists, get its id and devour the burger
            if (result.count > 0) {
                console.log(result);
                devourBurger(result.data.id);
            }
            else {
                //if customer does not exists, creates it, get its id and devour the burger
                db.Customer.create({ name: req.body.name }).then(result => {
                    devourBurger(result.insertedId);
                });
            }
        });

    });
};

