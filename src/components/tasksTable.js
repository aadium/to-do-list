import Checkbox from '@mui/material/Checkbox';
import React, { useState, useEffect } from 'react';
import '../App.css';

function TaskRow({ task }) {
  const [completed, setCompletionStatus] = useState(Boolean(task.completed));
  const dateCreated = new Date(task.id);
  const handleCompletionStatusChange = () => {
    setCompletionStatus(task.completed = !task.completed)
  }
  return (
    <tr>
      <td>{task.taskname}</td>
      <td>{dateCreated.toDateString().substring(4)}</td>
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
            <th>Task</th>
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
