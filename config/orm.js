// Import MySQL connection.
var connection = require("../config/connection.js");

//ORM object for the module.exports line
var orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: function (burger_name, cb) {
        connection.query("INSERT INTO burgers SET ?", {
            burger_name: burger_name,
            devoured: false,
        }, function (err, res) {
            if (err) throw err;
            cb(res);

        });
    },

    updateOne: function(burgerID, cb) {
        connection.query("UPDATE burgers SET ? WHERE ?", [{devoured: true}, {id: burgerID}],
        function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }

};

module.exports = orm;