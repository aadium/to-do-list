import React, { useState } from 'react';
import '../App.css';

function ViewUpdateTaskComponent() {
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
    window.location.reload();
  }
  return (
    <center>
      <div className='content'>
        <p className='header'>Task I.D.:</p>
        <input type='text' className='primary-input task' id='taskName' placeholder='Enter task name' value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      </div>
      <p>
        <button className='secondary-button' onClick={() => handleAdd()}>
          Edit Task
        </button>
      </p>
    </center>
  )
}

export default ViewUpdateTaskComponent;
