import '../App.css';
import TasksTableComponent from '../components/tasksTable';

function App() {
  return (
    <center>
      <TasksTableComponent/>
      <a href='/addTask'><button style={{ width: '100%' }} className='primary-button'>Add Task</button></a>
    </center>
  )
}

export default App;
