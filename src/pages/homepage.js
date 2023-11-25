import '../App.css';
import TasksTableComponent from '../components/tasksTable';

function App() {
  return (
    <center>
      <a href='/addTask'><button style={{ width: '100%' }} className='primary-button'>Add Task</button></a>
      <TasksTableComponent/>
    </center>
  )
}

export default App;
