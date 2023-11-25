import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function AddTaskComponent() {
  const nav = useNavigate();
  const [taskName, setTaskName] = useState('');
  function handleAdd() {
    if (taskName !== '') {
      fetch('http://localhost:3002/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: 'test', title: taskName, completed: false }),
      }).catch(error => console.error('Error adding task:', error));
    }
    nav('/');
  }
  return (
    <center>
      <div className='content'>
        <p className='header'>Add a new task</p>
        <input type='text' className='primary-input task' id='taskName' placeholder='Enter task name' value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      </div>
      <p>
        <button className='secondary-button' onClick={() => handleAdd()}>
          Add Task
        </button>
      </p>
    </center>
  )
}

export default AddTaskComponent;
