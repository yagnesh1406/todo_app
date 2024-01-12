// components/TaskItem.js
import React from 'react';
import api from '../services/apis';

const TaskItem = ({ task, onMarkAsDone }) => {
  const handleMarkAsDone = async () => {
    // Get the token from localStorage
    const token = api.getToken();
    console.log(token);
    try {
      const response = await api.markAsDone(task.id, token);

      if (response.ok) {
        // Refresh the task list after marking a task as done
        onMarkAsDone();
      } else {
        console.error('Error marking task as done');
      }
    } catch (error) {
      console.error('Error marking task as done:', error.message);
    }
  };

  return (
    <li>
      <span className={task.completed ? 'task-completed' : ''}>{task.name}</span>
      {!task.completed && <button onClick={handleMarkAsDone}>Mark as Done</button>}
    </li>
  );
};

export default TaskItem;
