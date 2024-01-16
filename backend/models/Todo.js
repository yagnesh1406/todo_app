const dbInstance = require('../config/db');
const queries = require('../config/queries');

class Todo {

    static async addTask(uid,task,description,status,priority, subtasks,date) {
        const db = await dbInstance.getInstance();
        const result = await db.query(queries.addTask(), [uid,task,description,status,priority, subtasks, date]);
        return result;
      }
    
    static async findTaskById(tid){
      const db = await dbInstance.getInstance();
      const result = await db.query(queries.findTaskById(), [tid]);
      return result;
    }

    static async markAsDone(tid) {
      const db = await dbInstance.getInstance();
      const result = await db.query(queries.markAsDone(), ['true',tid]);
      return result;
    }

    static async getPendingTasks(uid){
      const db = await dbInstance.getInstance();
      const result = await db.query(queries.getPendingTasks(), ['true',uid]);
      return result;
    }

    static async getDoneTasks(uid){
      const db = await dbInstance.getInstance();
      const result = await db.query(queries.getDoneTasks(), ['true',uid]);
      return result;
    }

    static async getAllTasks(uid){
      const db = await dbInstance.getInstance();
      const result = await db.query(queries.getAllTasks(), [uid]);
      return result;
    }

    static async getTaskByName(name,uid){
      const db = await dbInstance.getInstance();
      const result = await db.query(queries.getTaskByName(), [name,uid]);
      return result;
    }

    static async editTask(task, description, tid, uid){
      const db = await dbInstance.getInstance();
      const result = await db.query(queries.editTask(), [task, description, tid, uid, 'true']);
      return result;
    }

    static async deleteTask(tid,uid){
      const db = await dbInstance.getInstance();
      const result = await db.query(queries.deleteTask(), [tid, uid]);
      return result;
    }

    static async startTask(tid,uid){
      const db = await dbInstance.getInstance();
      const time = new Date();
      const result = await db.query(queries.startTask(), [time, 'In Progress', tid, uid, 'true']);
      return result;
    }

    static async endTask(tid,uid){
      const db = await dbInstance.getInstance();
      const time = new Date();
      const result = await db.query(queries.endTask(), [time, 'true', tid, uid, 'false']);
      return result;
    }

    static async sortTasks(uid){
      const db = await dbInstance.getInstance();
      const result = await db.query(queries.sortTasks(), [uid]);
      return result;
    }

    static async sortTaskByDate(uid){
      const db = await dbInstance.getInstance();
      const result = await db.query(queries.sortTaskByDate(), [uid]);
      return result;
    }
}


module.exports = Todo;