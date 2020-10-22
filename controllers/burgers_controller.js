//Require the Express and tie to router from Express
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    res.redirect("/index");
});

let server = app.listen();

server.on('clientError', (err, socket) => {
  console.error(err);
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

router.get("/index", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = { burgers: data };
        res.render("index", hbsObject);
    });
});

router.post("/add/burger", function (req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect("/index");
    });
});

router.post("/burger/eat/:id", function (req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect("/index");
    });
});

module.exports = router;
