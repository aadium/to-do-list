import '../App.css';
import AddTaskComponent from '../components/addTask';
import PendingTasksTableComponent from '../components/pendingTasksTable';
import CompleteTasksTableComponent from '../components/completeTasksTable';
import ViewUpdateTaskComponent from '../components/viewUpdateTask';

function App() {
  return (
    <div className='homepage-div'>
      <table className='homepage-table'>
        <tr>
          <td align='center' valign='top'>
            <center>
              <h1>Pending Tasks</h1>
              <PendingTasksTableComponent/>
              <h1>Completed Tasks</h1>
              <CompleteTasksTableComponent/>
            </center>
          </td>
          <td align='right' valign='top'>
            <div className='sidebar'>
              <AddTaskComponent/>
              <hr color='grey'></hr>
              <ViewUpdateTaskComponent/>
            </div>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default App;
