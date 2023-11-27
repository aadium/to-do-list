import React, { useState } from 'react';
import { IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Axios from 'axios'
import '../App.css';

function TaskEntry({ task }) {
  const [completed, setCompletionStatus] = useState(Boolean(task.completed));
  const dateCreated = new Date(task.id);
  const dueDate = new Date(task.duedate);
  var iconColor = '#61DAFB';
  var textColor = '#61DAFB';
  if (task.duedate - Date.now() < 172800000) {
    iconColor = 'orange';
    textColor = 'orange';
  };
  if (task.duedate - Date.now() <= 0) {
    iconColor = 'red';
    textColor = 'red';
  }
  if (task.completed) {
    iconColor = 'grey';
    textColor = 'grey';
  }
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
      <td><IconButton aria-label='delete' onClick={(() => deleteTask(task.id))}><DeleteIcon style={{color: iconColor}} /></IconButton></td>
      <td><font style={{color:textColor}}>{task.taskname}</font></td>
      <td><font style={{color:textColor}}>{dateCreated.toDateString().substring(4)}</font></td>
      <td><font style={{color:textColor}}>{dueDate.toDateString().substring(4)}</font></td>
      <td><Checkbox checked={completed} onChange={handleCompletionStatusChange} style={{ color: iconColor }} /></td>
    </tr>
  )
}

export default TaskEntry