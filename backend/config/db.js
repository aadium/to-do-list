const mysql = require('mysql2')
const pw = require('./password')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: pw,
    database: 'todo_list',
});

module.exports = db;