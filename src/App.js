import Checkbox from '@mui/material/Checkbox';
import React, { useState, useEffect } from 'react';
import './App.css';

function TaskRow({ task }) {
  const [completed, setCompletionStatus] = useState(Boolean(task.completed));
  const handleCompletionStatusChange = () => {
    setCompletionStatus(task.completed = !task.completed)
  }
  return (
    <tr>
      <td>{task.taskname}</td>
      <td><Checkbox checked={completed} onChange={handleCompletionStatusChange} style={{ color: '#61DAFB' }} /></td>
    </tr>
  )
}

function TasksTable() {
  let rows = [];
  const [taskList, setTaskList] = useState([]);
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    fetch('http://localhost:3002/api/get')
      .then(response => response.json())
      .then(data => setTaskList(data))
      .catch(error => console.error('Error fetching tasks:', error));
    
    console.log(taskList);
  }, []);

  function handleAdd() {
    fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ taskName, completed: false }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Task added successfully');
          // Optionally, you can fetch the updated task list after adding a task
          // This depends on your use case
          // fetch('/api/tasks')
          //   .then(response => response.json())
          //   .then(data => setTaskList(data))
          //   .catch(error => console.error('Error fetching tasks:', error));
        } else {
          console.error('Error adding task:', response.statusText);
        }
      })
      .catch(error => console.error('Error adding task:', error));
  }
  taskList.forEach(task => {
    rows.push(<TaskRow task={task} key={task.taskName}></TaskRow>);
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <center>
        <div className='content'>
          <p>Add Task</p>
          <input type='text' id='taskName' value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        </div>
        <div>
          <button className='secondary-button' onClick={() => handleAdd()}>
            Add Task
          </button>
        </div>
      </center>
    </div>
  );
}

function App() {
  return (
    <div>
      <TasksTable/>
    </div>
  )
}

export default App;
