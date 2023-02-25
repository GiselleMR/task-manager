const Task = require('../models/task');

async function createTask(user){
    const newTask = new Task(user)
    const saveTask = await newTask.save()
    return saveTask
}

module.exports = createTask;