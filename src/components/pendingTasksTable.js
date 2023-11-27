import React, { useState, useEffect } from 'react';
import '../App.css';
import TaskEntry from './taskEntry';

function PendingTasksTableComponent() {
  let pendingTaskRows = [];
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/get')
      .then(response => response.json())
      .then(data => setTaskList(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  taskList.forEach(task => {
    if (task.completed===0) {     
      pendingTaskRows.push(<TaskEntry task={task} key={task.taskName}/>);
    }
  });
  
  return (
    <div>
      <table className='tasks'>
        <thead>
          <tr>
            <th></th>
            <th>Task Name</th>
            <th>Created</th>
            <th>Due</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>{pendingTaskRows}</tbody>
      </table>
    </div>
  );
}

export default PendingTasksTableComponent;
