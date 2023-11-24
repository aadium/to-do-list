const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Thunderbolt1@',
    database: 'todo_list',
});

module.exports = db;