import React, { useState, useEffect } from 'react';
import { IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Axios from 'axios'
import '../App.css';

function TaskRow({ task }) {
  const [completed, setCompletionStatus] = useState(Boolean(task.completed));
  const dateCreated = new Date(task.id);
  const handleCompletionStatusChange = async () => {
    await setCompletionStatus(task.completed = !task.completed)
    try {
      Axios.put(`http://localhost:3002/api/update_completion/${task.id}`, {
        completed: task.completed ? 1 : 0,
      });
    } catch (error) {
      console.error('Error updating completion status:', error);
    }
    window.location.reload();
  }
  const deleteTask = (id) => {
    Axios.delete(`http://localhost:3002/api/delete/${id}`).then((response)=>{
        alert("you deleted a task")
    });
    window.location.reload();
  }
  return (
    <tr>
      <td><IconButton aria-label='delete' onClick={(() => deleteTask(task.id))}><DeleteIcon style={{color: '#61DAFB'}} /></IconButton></td>
      <td>{task.taskname}</td>
      <td>{dateCreated.toDateString().substring(4)}<br/>{dateCreated.toTimeString().substring(0,5)}</td>
      <td><Checkbox checked={completed} onChange={handleCompletionStatusChange} style={{ color: '#61DAFB' }} /></td>
    </tr>
  )
}

function TasksTableComponent() {
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
            <th></th>
            <th>Task Name</th>
            <th>Created</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default TasksTableComponent;
