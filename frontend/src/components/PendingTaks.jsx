import React, { useEffect, useState } from "react";
import api from "../services/apis";
import { Navigate, useNavigate } from "react-router-dom";

const PendingTasks = () => {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetchTasks();
    }, []);
  
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await api.getPendingTasks(token);
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          // console.log(data);
          setTasks(data.data);
        } else {
          console.error("Error fetching tasks");
        }
      } catch (error) {
        console.error("Error fetching tasks:", error.message);
      } finally {
        setLoading(false);
      }
    };
  
    const handleMarkAsDone = async (id) => {
      // Get the token from localStorage
      // const token = getToken();
      // console.log(token);
      try {
        const response = await api.markAsDone(id);
        // console.log(response);
        if (response.ok) {
          fetchTasks();
        } else {
          console.error("Error marking task as done");
        }
      } catch (error) {
        console.error("Error marking task as done:", error.message);
      }
    };
  
    const handleDelete = async (id) => {
      try {
        const response = await api.deleteTask(id);
        // console.log(response);
        if (response.ok) {
          fetchTasks();
        } else {
          console.error("Error deleting tasks");
        }
      } catch (error) {
        console.error("Error deleting task:", error.message);
      }
    };
  
    const handleStart = async (id) => {
      try {
        const response = await api.startTask(id);
        // console.log(response);
        if (response.ok) {
          fetchTasks();
        } else {
          console.error("Error deleting tasks");
        }
      } catch (error) {
        console.error("Error deleting task:", error.message);
      }
    };

    const handleEdit = async (id) => {
        navigate('/edittask');
    }
  
    const handleEnd = async (id) => {
      try {
        const response = await api.endTask(id);
        // console.log(response);
        if (response.ok) {
          fetchTasks();
        } else {
          console.error("Error deleting tasks");
        }
      } catch (error) {
        console.error("Error deleting task:", error.message);
      }
    };
  
    const handleAdd = async () => {
      navigate("/addtask");
    };
  
    if (loading) {
      return <p>Loading tasks...</p>;
    }
    console.log(tasks);
    return (
        <>
          <div>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  {/* <th>User ID</th> */}
                  <th>Task</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>start_time</th>
                  <th>end_time</th>
                  <th>Mark As Done</th>
                  <th>Delete</th>
                  <th>Start</th>
                  <th>End</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.tid}>
                    {/* <td>{task.uid}</td> */}
                    <td>{task.task}</td>
                    <td>{task.description}</td>
                    <td>{task.status}</td>
                    <td>{task.priority}</td>
                    <td>{task.start_time}</td>
                    <td>{task.end_time}</td>
                    <td>
                      {/* <div class="btn-group"> */}
                  
                        <button
                          class="btn btn-success"
                          onClick={() => handleMarkAsDone(task.tid)}
                        >
                          Mark as Done
                        </button>
                        </td>
                        <td>
                        <button
                          class="btn btn-danger"
                          onClick={() => handleDelete(task.tid)}
                        >
                          Delete
                        </button>
                        </td>
                        <td>
                        <button
                          class="btn btn-primary"
                          onClick={() => handleStart(task.tid)}
                        >
                          Start
                        </button>
                        </td>
                        <td>
                        <button
                          class="btn btn-warning"
                          onClick={() => handleEnd(task.tid)}
                        >
                          End
                        </button> 
                    </td>
                    <td>
                        <button
                          class="btn btn-warning"
                          onClick={() => handleEdit(task.tid)}
                        >
                          Edit
                        </button> 
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <button class="btn btn-primary" onClick={handleAdd}>
              Add
            </button>
          </div>
        </>
      );
  };
  
  export default PendingTasks;