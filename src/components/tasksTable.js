import React, { useState, useEffect } from 'react';
import '../App.css';
import TaskEntry from './taskEntry';

function TasksTableComponent() {
  let pendingTaskRows = [];
  let completedTaskRows = [];
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/get')
      .then(response => response.json())
      .then(data => setTaskList(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  taskList.forEach(task => {
    if (task.completed===1) {
      completedTaskRows.push(<TaskEntry task={task} key={task.taskName}/>);
    } else {
      pendingTaskRows.push(<TaskEntry task={task} key={task.taskName}/>);
    }
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
        <tbody>{pendingTaskRows}</tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th></th>
            <th id='completed'>Task Name</th>
            <th id='completed'>Created</th>
            <th id='completed'>Completed</th>
          </tr>
        </thead>
        <tbody>{completedTaskRows}</tbody>
      </table>
    </div>
  );
}

export default TasksTableComponent;
