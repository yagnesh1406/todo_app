const Todo = require("../models/Todo");

const addTask = async (req,res) => {
  let { task, description, priority} = req.body;
  const uid = req.user.uid;
  try {
    if(priority == undefined ||  priority == null || priority.length == 0){
      priority = 'Low';
    } 
    const status = 'false';
    const date = new Date();
    const result = await Todo.addTask(uid,task,description,status,priority, date);
    if(result.rowCount){
        res.send({success: true, message: "task added successfully"});
    }
    else res.send({success: false, message: "error while adding task"});
  } catch (err) {
    res.status(500).json({ message: "Error while adding tasks: " + err.message });
  }
}

const markAsDone = async (req,res) => {
  const tid = req.params.id;
  try {
    const status = 'false';
    const task = await Todo.findTaskById(tid);
    if(task.rows[0].uid !== req.user.uid){
        return res.send({success:false, message: "unauthorized"});
    }
    const result = await Todo.markAsDone(tid);
    if(result.rowCount){
        res.send({success: true, message: "task marked done successfully"});
    }
    else res.send({success: false, message: "error while marking task"});
  } catch (err) {
    res.status(500).json({ message: "Error while marking task: " + err.message });
  }
}

const getPendingTasks = async (req,res) => {
  try {
    const uid = req.user.uid;
    const result = await Todo.getPendingTasks(uid);
    if(result.rowCount){
        res.send({success: true, message: "tasks fetched successfully", data: result.rows});
    }
    else res.send({success: false, message: "error while fetching tasks"});
  } catch (err) {
    res.status(500).json({ message: "Error while fetching tasks: " + err.message });
  }
}

const getDoneTasks = async (req,res) => {
  try {
    const uid = req.user.uid;
    const result = await Todo.getDoneTasks(uid);
    if(result.rowCount){
        res.send({success: true, message: "tasks fetched successfully", data: result.rows});
    }
    else res.send({success: false, message: "error while fetching tasks"});
  } catch (err) {
    res.status(500).json({ message: "Error while fetching tasks: " + err.message });
  }
}

const getAllTasks = async (req,res) => {
  try {
    const uid = req.user.uid;
    const result = await Todo.getAllTasks(uid);
    if(result.rowCount){
        res.send({success: true, message: "tasks fetched successfully", data: result.rows});
    }
    else res.send({success: false, message: "error while fetching tasks"});
  } catch (err) {
    res.status(500).json({ message: "Error while fetching tasks: " + err.message });
  }
}

const getTaskByName = async(req,res) => {
  const name = req.params.name;
  try {
    const uid = req.user.uid;
    const result = await Todo.getTaskByName(name,uid);
    if(result.rowCount){
        res.send({success: true, message: "tasks fetched successfully", data: result.rows});
    }
    else res.send({success: false, message: "error while fetching tasks"});
  } catch (err) {
    res.status(500).json({ message: "Error while fetching tasks: " + err.message });
  }
}

const editTask = async (req,res) => {
  const tid = req.params.id;
  let {task, description} = req.body;
  try {
    const uid = req.user.uid;
    const taskk = await Todo.findTaskById(tid);
    if(task == undefined || null){
      task = taskk.rows[0].task;
    }
    if(description == undefined || null){
      description = taskk.rows[0].description;
    }
    const result = await Todo.editTask(task,description,tid,uid);
    if(result.rowCount){
        res.send({success: true, message: "task edited successfully"});
    }
    else res.send({success: false, message: "error while editing task, could not edit after completed"});
  } catch (err) {
    res.status(500).json({ message: "Error while editing task: " + err.message });
  }
}

const deleteTask = async (req,res) => {
  const tid = req.params.id;
  try {
    const uid = req.user.uid;
    const taskk = await Todo.findTaskById(tid);
    // console.log(taskk.rows[0].subtasks.length);
    if(taskk.rows[0].subtasks.length > 0){
      return res.send({success:false, message: "Cannot delete taks as you have subtask in it"});
    }
    const result = await Todo.deleteTask(tid,uid);

    if(result.rowCount){
        res.send({success: true, message: "task deleted successfully"});
    }
    else res.send({success: false, message: "error while deleting tasks"});
  } catch (err) {
    res.status(500).json({ message: "Error while deleting task: " + err.message });
  }
}

const startTask = async (req,res) => {
  const tid = req.params.id;
  try {
    const uid = req.user.uid;
    const result = await Todo.startTask(tid,uid);
    if(result.rowCount){
        res.send({success: true, message: "task started successfully"});
    }
    else res.send({success: false, message: "error while startings tasks"});
  } catch (err) {
    res.status(500).json({ message: "Error while starting task: " + err.message });
  }
}

const endTask = async (req,res) => {
  const tid = req.params.id;
  try {
    const uid = req.user.uid;
    const result = await Todo.endTask(tid,uid);
    if(result.rowCount){
        res.send({success: true, message: "task ended successfully"});
    }
    else res.send({success: false, message: "error while ending tasks"});
  } catch (err) {
    res.status(500).json({ message: "Error while ending task: " + err.message });
  }
}

const sortTasks = async (req,res) => {
  const uid = req.user.uid;
  try {
    const result = await Todo.sortTasks(uid);
    if(result.rowCount){
        res.send({success: true, message: "task sorted successfully", data: result.rows});
    }
    else res.send({success: false, message: "error while sorting tasks"});
  } catch (err) {
    res.status(500).json({ message: "Error while sorting tasks: " + err.message });
  }
}

const sortTaskByDate = async (req,res) => {
  const uid = req.user.uid;
  try {
    const result = await Todo.sortTaskByDate(uid);
    if(result.rowCount){
        res.send({success: true, message: "task sorted successfully", data: result.rows});
    }
    else res.send({success: false, message: "error while sorting tasks"});
  } catch (err) {
    res.status(500).json({ message: "Error while sorting tasks: " + err.message });
  }
}

module.exports = {addTask, markAsDone, getPendingTasks, getDoneTasks, getAllTasks, getTaskByName, editTask, deleteTask, startTask, endTask, sortTasks, sortTaskByDate}