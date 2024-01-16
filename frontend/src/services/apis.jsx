const API_BASE_URL = 'http://localhost:8000/api/todo';

const token = localStorage.getItem('authToken');
console.log(token);

// const getToken = () => localStorage.getItem('authToken');

const api = {
  addTask: (taskk) => fetch(`${API_BASE_URL}/addTask`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(taskk),
  }),
  markAsDone: (id) => fetch(`${API_BASE_URL}/markAsDone/${id}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }),
  getPendingTasks: () => fetch(`${API_BASE_URL}/getPendingTasks`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }),
  getAllTasks: () => fetch(`${API_BASE_URL}/getAllTasks`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }),
  getTaskByName: (name) => fetch(`${API_BASE_URL}/getTaskByName/${name}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }),
  editTask: (id, task) => fetch(`${API_BASE_URL}/editTask/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(task),
  }),
  deleteTask: (id) => fetch(`${API_BASE_URL}/deleteTask/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }),
  startTask: (id) => fetch(`${API_BASE_URL}/startTask/${id}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }),
  endTask: (id) => fetch(`${API_BASE_URL}/endTask/${id}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }),
  sortTasks: () => fetch(`${API_BASE_URL}/sortTasks`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }),
};

// export { getToken, api as default };
// module.exports = {api};

export default api;
