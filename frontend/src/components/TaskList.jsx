// components/TaskList.js
import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import api from '../services/apis';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch tasks when the component mounts
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await api.getAllTasks(token);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setTasks(data.data);
      } else {
        console.error('Error fetching tasks');
      }
    } catch (error) {
      console.error('Error fetching tasks:', error.message);
    } finally {
      // Set loading to false regardless of success or failure
      setLoading(false);
    }
  };

  const handleMarkAsDone = async () => {
    // Trigger a refresh of the task list after marking a task as done
    fetchTasks();
  };

  if (loading) {
    return <p>Loading tasks...</p>;
  }
  console.log(tasks);
  return (
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Task</th>
          <th>Description</th>
          <th>Status</th>
          <th>Priority</th>
          <th>start_time</th>
          <th>end_time</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.tid}>
            <td>{task.uid}</td>
            <td>{task.task}</td>
            <td>{task.description}</td>
            <td>{task.status}</td>
            <td>{task.priority}</td>
            <td>{task.start_time}</td>
            <td>{task.end_time}</td>
            <td>
              {/* Button to mark task as done */}
              <button onClick={() => handleMarkAsDone(task.tid)}>Mark as Done</button>
            </td>
            {/* You can add more columns as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
