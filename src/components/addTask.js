import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function AddTaskComponent() {
  const nav = useNavigate();
  const [taskName, setTaskName] = useState('');
  function handleAdd() {
    fetch('http://localhost:3002/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'test', title: taskName, completed: false }),
    }).catch(error => console.error('Error adding task:', error));
    nav('/');
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

export default AddTaskComponent;
