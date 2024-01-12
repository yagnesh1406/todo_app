// pages/HomePage.js
import React, { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import api from '../services/apis';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch all tasks when the component mounts
    fetchAllTasks();
  }, []);

  const fetchAllTasks = async () => {
    try {
      const response = await api.getAllTasks();

      if (response.ok) {
        const data = await response.json();
        setTasks(data.tasks);
      } else {
        console.error('Error fetching tasks');
      }
    } catch (error) {
      console.error('Error fetching tasks:', error.message);
    }
  };

  const handleMarkAsDone = async (id) => {
    try {
      const response = await api.markAsDone(id);

      if (response.ok) {
        // Refresh the task list after marking a task as done
        fetchAllTasks();
      } else {
        console.error('Error marking task as done');
      }
    } catch (error) {
      console.error('Error marking task as done:', error.message);
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TaskList tasks={tasks} onMarkAsDone={handleMarkAsDone} />
    </div>
  );
};

export default HomePage;
