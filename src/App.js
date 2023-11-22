import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';
import Popup from 'reactjs-popup';
import { useState } from 'react';
import './App.css';

const TODO_TASKS = [
  { taskName: 'Brush Teeth', completed: true },
  { taskName: 'Learn React', completed: false },
  { taskName: 'Apply for Jobs', completed: false },
]

function AddTask() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Popup trigger=
              {<button className='primary-button' onClick={handleClickOpen}>Add Task</button>} 
              modal nested overlayStyle={{backdropFilter: 'blur(8px)', background: 'rgba(0, 0, 0, 0.6)'}}>
              {
                  close => (
                      <div className='dialog'>
                          <div className='content'>
                              Add Task
                          </div>
                          <div>
                              <button className='secondary-button' onClick=
                                  {() => close()}>
                                      Close
                              </button>
                              <button className='secondary-button' onClick=
                                  {() => close()}>
                                      Add Task
                              </button>
                          </div>
                      </div>
                  )
              }
          </Popup>
    </React.Fragment>
  );
}

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

function TasksTable({tasks}) {
  const rows = [];
  const [list, setList] = React.useState(tasks);
  function handleAdd({task}) {
    const newList = list.concat({task});
    setList(newList);
  }
  tasks.forEach(task => {
    rows.push(<TaskRow task={task} key={task.taskName}></TaskRow>)
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function App() {
  return (
    <div>
      <TasksTable tasks={TODO_TASKS}/>
      <AddTask/>
    </div>
  )
}

export default App;
