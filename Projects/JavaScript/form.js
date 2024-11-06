var con = require('./connection'); // Import the connection pool
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the form page
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/form.html');
});

// Handle form submission
app.post('/', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;

    // Fetch a connection from the pool
    con.connect(function(error, connection) {
        if (error) {
            console.error('Error connecting to the database:', error);
            res.status(500).send("Database connection error");
            return;
        }

        var sql = "INSERT INTO student (name, email, phone) VALUES (?, ?, ?)";  // Use placeholders to avoid SQL injection
        connection.query(sql, [name, email, phone], function(error, result) {
            // Release the connection back to the pool
            connection.release();

            if (error) {
                console.error('Error executing query:', error);
                res.status(500).send("Error executing query");
                return;
            }

            res.send("Student registration successful. Student ID: " + result.insertId);
        });
    });
});

// Start the server on port 5500
app.listen(5500, function() {
    console.log('Server running on port 5500');
});
