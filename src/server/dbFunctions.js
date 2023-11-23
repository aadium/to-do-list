const dbUtil = require('./dbUtil');
const con = dbUtil.con;

var todo_tasks

con.connect(function(err) {
    if (err) throw err;

    con.query("SELECT * FROM todo_tasks", function (err, result, fields) {
        if (err) throw err;
        todo_tasks = result;
    });
});

module.exports(todo_tasks);