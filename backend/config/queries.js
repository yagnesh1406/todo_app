const queries = {
  checkDbInstance: () => {
    const checkDbInstanceQuery = `
          SELECT * FROM public.users`;
    return checkDbInstanceQuery;
  },
  findByUsername: () => {
    const findByUsername = `SELECT * FROM users WHERE username = $2`;
    return findByUsername;
  },
  findById: () => {
    const findById = `SELECT * FROM users WHERE id = $1`;
    return findById;
  },
  createUser: () => {
    const createUser = `INSERT INTO users (uname, username, pwd) VALUES ($1, $2, $3)`;
    return createUser;
  },
  addTask: () => {
    const addTask =  `INSERT INTO todo (uid, task, description, status, priority, subtasks, date_added) VALUES ($1,$2,$3,$4,$5,$6,$7)`;
    return addTask;
  },
  findTaskById: () => {
    const findTaskById = `SELECT * FROM TODO where tid = $1`;
    return findTaskById;
  },
  markAsDone: () => {
    const markAsDone = `UPDATE TODO set status = $1, start_time = $2, end_time =$2 where tid = $3`;
    return markAsDone;
  },
  getPendingTasks: () => {
    const getPendingTasks = `SELECT * FROM TODO where status != $1 and uid = $2`;
    return getPendingTasks
  },
  getDoneTasks: () => {
    const getDoneTasks = `SELECT * FROM TODO where status = $1 and uid = $2`;
    return getDoneTasks
  },
  getAllTasks: () => {
    const getAllTasks = `SELECT * FROM TODO where uid=$1`;
    return getAllTasks;
  },
  getTaskByName: () => {
    const getTaskByName = `SELECT * FROM TODO where task = $1 and uid = $2`;
    return getTaskByName;
  },
  editTask: () => {
    const editTask = `UPDATE TODO set task = $1 , description = $2 where tid = $3 and uid = $4 and status != $5`;
    return editTask;
  },
  deleteTask: () => {
    const deleteTask = `DELETE FROM TODO where tid = $1 and uid = $2`;
    return deleteTask;
  },
  startTask: () => {
    const startTask = `UPDATE TODO set start_time = $1, status = $2 where tid = $3 and uid = $4 and status != $5`;
    return startTask;
  },
  endTask: () => {
    const endTask = `UPDATE TODO set end_time = $1, status = $2 where tid = $3 and uid = $4 and status != $5`;
    return endTask;
  },
  sortTasks: () => {
    const sortTasks = `SELECT * FROM TODO where uid = $1 order by priority asc`;
    return sortTasks;
  },
  sortTaskByDate: () => {
    const sortTaskByDate = `SELECT * FROM TODO where uid = $1 order by date_added`;
    return sortTaskByDate;
  }
};

module.exports = queries;