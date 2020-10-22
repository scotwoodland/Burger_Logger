// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

//==================================================================
// Export at the end of the burger.js file.
var burger =
{

    selectAll: function (callback) {
        orm.selectAll(function (res) {
            callback(res);
        });
    },

    insertOne: function (burger_name, callback) {
        orm.insertOne(burger_name, function (res) {
            callback(res);
        });
    },

    updateOne: function (burger_id, callback) {
        orm.updateOne(burger_id, function (res) {
            callback(res);
        });
    }

};



// var burger = {
//     selectAll: function (cb) {
//         orm.selectAll(function (res) {
//             cb(res);
//         });
//     },

//     insertOne: function (cols, vals, cb) {
//         orm.create("burgers", cols, vals, function (res) {
//             cb(res);
//         });
//     },

//     update: function (objColVals, condition, cb) {
//         orm.update("burgers", objColVals, condition, function (res) {
//             cb(res);
//         });
//     },

//     delete: function (condition, cb) {
//         orm.delete("burgers", condition, function (res) {
//             cb(res);
//         });
//     }
// };

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;