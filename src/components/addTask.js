import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../App.css';

function AddTaskComponent() {
  const [taskName, setTaskName] = useState('');
  const [dueDateValue, setDueDateValue] = useState(dayjs(new Date(Date.now()).toDateString().substring(4)));
  function handleAdd() {
    if (taskName !== '') {
      fetch('http://localhost:3002/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: 'test', title: taskName, completed: false, dueDate: dayjs(dueDateValue).valueOf() }),
      }).catch(error => console.error('Error adding task:', error));
    }
    window.location.reload();
  }
  return (
    <center>
      <div className='content'>
        <p className='header'>Add a new task</p>
        <input type='text' className='primary-input task' id='taskName' placeholder='Enter task name' value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      </div>
      <div className='date-selector'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker label="Select due date" value={dueDateValue} onChange={(newValue) => setDueDateValue(newValue)}/>
          </DemoContainer>
        </LocalizationProvider>
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
