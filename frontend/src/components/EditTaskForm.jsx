// components/EditTaskForm.js
import React, { useState } from 'react';

const EditTaskForm = ({ task, onEditTask }) => {
  const [editedTask, setEditedTask] = useState(task.title);

  const handleEditTask = () => {
    if (editedTask.trim() !== '') {
      onEditTask(task.id, editedTask);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={editedTask}
        onChange={(e) => setEditedTask(e.target.value)}
      />
      <button onClick={handleEditTask}>Edit Task</button>
    </div>
  );
};

export default EditTaskForm;
