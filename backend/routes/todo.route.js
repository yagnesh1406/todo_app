const express = require("express");
const controller = require("../controllers/todo.controller");
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');

router.use(authenticateToken)

router.post("/addTask", controller.addTask);
router.post("/markAsDone/:id", controller.markAsDone);
router.get("/getPendingTasks", controller.getPendingTasks);
router.get("/getAllTasks", controller.getAllTasks);
router.get("/getTaskByName/:name", controller.getTaskByName);
router.post("/editTask/:id", controller.editTask);
router.delete("/deleteTask/:id", controller.deleteTask);
router.post("/startTask/:id", controller.startTask);
router.post("/endTask/:id", controller.endTask);
router.get("/sortTasks", controller.sortTasks);
router.get("/sortTaskByDate", controller.sortTaskByDate);

module.exports = router;