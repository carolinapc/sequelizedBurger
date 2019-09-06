var express = require("express");
var router = express.Router();

var db = require("../models");

//select all
router.get("/", (req, res) => {
    db.Burger.findAll({ include: db.Customer }).then(function (data) {
        res.render("index", { burgers: data });
    });
});

//creates new burger
router.post("/api/burgers", (req, res) => {
    db.Burger.create(req.body).then(result => {
        res.redirect("/");
    }).catch(err => {
        res.status(500).end(err.errors[0].message);
    });
});

//devour an burger
router.put("/api/burgers", (req, res) => {

    var devourBurger = (customerId) => {
        
        db.Burger.update({
            devoured: true,
            CustomerId: customerId
            },
            {
                where: {
                    id: req.body.id
                }
            }).then(result => {
                if (result.changedRows === 0) {
                    res.status(404).end();
                }
                else {
                    res.status(200).end();
                }
            }).catch(err => {
                res.status(500).end(err.errors[0].message);
            });
    };

    //search for a customer and create if was not found
    db.Customer.findOrCreate({
        where: {
            name: req.body.customer
        }
    }).then(result => {
        devourBurger(result[0].id);    
    }).catch(err => {
        res.status(500).end(err.errors[0].message);
    });

});

module.exports = router;