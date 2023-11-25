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

app.put('/api/update_completion/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  const newCompletionStatus = req.body.completed;

  // Update completion status in the database
  db.query('UPDATE todo_tasks SET completed = ? WHERE id = ?', [newCompletionStatus, taskId], (err, result) => {
    if (err) {
      console.error('Error updating completion status in the database:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Completion status updated successfully');
    }
  });
});

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