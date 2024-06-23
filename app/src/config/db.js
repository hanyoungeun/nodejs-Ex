const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "testuser",
    password: "testuser",
    database: "mydatabase",
});

db.connect();

module.exports = db;