var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,  // Number of connections in the pool
    host: 'localhost',    // Replace with your MySQL host
    user: 'root',// Replace with your MySQL user
    password: '@Radhakrishna297', // Replace with your MySQL password
    database: 'BankManagementSystem' // Replace with your database name
});

module.exports = pool;
