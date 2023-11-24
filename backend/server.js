const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();

const PORT = 3002;
app.use(cors());
app.use(express.json())

app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM todo_tasks", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

app.post('/api/post', (req, res) => {
  const username = req.body.userName;
  const title = req.body.title;
  const completed = req.body.completed;

  db.query("INSERT INTO todo_tasks VALUES (?,?,?,?)", [username, title, completed, Date.now()], (err, result) => {
    if (err) {
      console.log(err)
    }
  });
})

app.delete('/api/delete/:id', (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM todo_tasks WHERE id= ?", id, (err, result) => {
    if (err) {
      console.log(err)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})