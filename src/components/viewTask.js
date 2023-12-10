import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import '../App.css';
import { useParams } from 'react-router-dom';

function ViewTaskComponent() {
  const {id} = useParams();
  const [task,setTask] = useState({});
  useEffect(() => {
    Axios.get(`http://localhost:3002/api/gettask/${id}`).then((data) => {
      setTask({
        id: id,
        title: data.data[0].taskname,
        creationDate: new Date(data.data[0].id).toDateString().substring(4),
        dueDate: new Date(data.data[0].duedate).toDateString().substring(4),
      });
    });
  }, [id]);
  
  return (
    <center>
      <div className='content'>
        <p className='header'>{task.title}</p>
        <p>{task.id}</p>
        <p>{task.creationDate}</p>
        <p>{task.dueDate}</p>
      </div>
    </center>
  )
}

export default ViewTaskComponent;
