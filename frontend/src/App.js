// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// import './App.css'
import AddTaskForm from './components/AddTaskForm';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import Donetasks from './components/Donetasks';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/addtask" element={<AddTaskForm/>}/>
        <Route path='/alltasks' element={<TaskList/>}/>
        <Route path='/donetasks' element={<Donetasks/>}/>
      </Routes>
    </Router>
  );
};

export default App;
