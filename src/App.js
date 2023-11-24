import Checkbox from '@mui/material/Checkbox';
import React, { useState, useEffect } from 'react';
import './App.css';

function AddTask() {
  const [taskName, setTaskName] = useState('');
  function handleAdd() {
    fetch('http://localhost:3002/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'test', title: taskName, completed: false }),
    }).catch(error => console.error('Error adding task:', error));
  }
  return (
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
  )
}

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

  useEffect(() => {
    fetch('http://localhost:3002/api/get')
      .then(response => response.json())
      .then(data => setTaskList(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

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
    </div>
  );
}

function App() {
  return (
    <div>
      <TasksTable/>
      <AddTask/>
    </div>
  )
}

export default App;
