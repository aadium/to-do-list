import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import HomePage from './pages/homepage';
import AddTaskComponent from './components/addTask';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addTask" element={<AddTaskComponent />} />
      </Routes>
    </Router>
  )
}

export default App;