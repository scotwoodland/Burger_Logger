// Import MySQL connection.
var connection = require("../config/connection.js");

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()

// Export the ORM object in module.exports.

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

// Export the orm object for the model (burger.js).
module.exports = orm;