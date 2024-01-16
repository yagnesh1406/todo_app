// components/AddTaskForm.js
import React, { useState } from "react";
import api from "../services/apis";
import { Navigate, useNavigate } from "react-router-dom";

const AddTaskForm = ({ onAddTask }) => {
  const navigate = useNavigate();
  const [newTask, setNewTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const handleAddTask = async () => {
    try {
      console.log(newTask, description);
      // console.log(getToken());
      const taskk = {
        task: newTask,
        description: description,
      };
      const response = await api.addTask(taskk);
      // console.log(response);
      if (response.ok) {
        // onAddTask();
        setNewTask("");
        setDescription("");
        navigate("/");
      } else {
        console.error("Error marking task as done");
      }
    } catch (error) {
      console.error("Error marking task as done:", error.message);
    }
  };

  return (
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Task Title
        </label>
        <input
          class="form-control"
          type="text"
          value={newTask}
          placeholder="task title"
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Task Description
        </label>
        <input
          class="form-control"
          type="text"
          value={description}
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Task Priority
        </label>
        <input
          class="form-control"
          type="text"
          value={priority}
          placeholder="description"
          onChange={(e) => setPriority(e.target.value)}
        />
      </div>
      <button class="btn btn-primary" onClick={handleAddTask}>
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
