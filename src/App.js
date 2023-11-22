import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';
import { useState } from 'react';
import './App.css';

function TaskRow({ task }) {
  const [completed, setCompletionStatus] = useState(task.completed);
  const handleCompletionStatusChange = () => {
    setCompletionStatus(task.completed = !task.completed)
  }
  return (
    <tr>
      <td>{task.taskName}</td>
      <td><Checkbox checked={completed} onChange={handleCompletionStatusChange} style={{ color: '#61DAFB' }} /></td>
    </tr>
  )
}

function TasksTable() {
  const rows = [];
  const [taskList, addTaskToList] = React.useState([]);
  const [taskName, setTaskName] = React.useState('');
  function handleAdd() {
    const newTask = {taskName, completed: false};
    addTaskToList([...taskList, newTask]);
    setTaskName('');
  }
  taskList.forEach(task => {
    rows.push(<TaskRow task={task} key={task.taskName}></TaskRow>)
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
