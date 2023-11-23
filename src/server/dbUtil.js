var mysql = require('mysql2');

const password = 'Thunderbolt1@'

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: password,
  database: 'todo_list'
});

module.exports = {con}