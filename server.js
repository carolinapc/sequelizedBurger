var express = require("express");

var PORT = process.env.PORT || 3000;

var db = require("./models");

var app = express();

//Serve static content for the app from the "public" directory
app.use(express.static("public"));

//Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});