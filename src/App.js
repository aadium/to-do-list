import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import HomePage from './pages/homepage';
import CompleteTasksTableComponent from './components/completeTasksTable';
import PendingTasksTableComponent from './components/pendingTasksTable';
import AddTaskComponent from './components/addTask';
import ViewUpdateTaskComponent from './components/viewUpdateTask';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/completetaskstable" element={<CompleteTasksTableComponent />} />
        <Route path="/pendingtaskstable" element={<PendingTasksTableComponent />} />
        <Route path="/addtask" element={<AddTaskComponent />} />
        <Route path="/viewupdatetask" element={<ViewUpdateTaskComponent />} />
      </Routes>
    </Router>
  )
}

export default App;