const Task = require('../models/task');
const User = require('../models/user');
const TaskDate = require('../models/taskDate');
const taskDate = require('../models/taskDate');

module.exports = {
  index,
  show,
  new: newTask,
  create,
  delete: deleteTask
};

function deleteTask(req, res) {
  // console.log("REQ.PARAMS");
  // console.log(req.params);
  Task.findByIdAndDelete(req.params._id, function(err, task){
    res.redirect('/tasks');
  });
}

function create(req, res) {
  User.findById(req.user._id, function(err, user) {
    console.log(user);
    console.log("REQUEST USER", req.user)
    console.log("userfound",user)
    console.log(req.user);
    Task.create({
      description: req.body.description,
      user: user._id,
      taskDate: req.body.taskDate

}, function(err, task){
  TaskDate.create({
    date:req.body.taskDate, 
    user:user._id
  },
  function(err, taskDateDue){
    taskDateDue.task.push(task._id)
    taskDateDue.save(function(err){
      user.save(function(err){
        res.redirect('/tasks')
      })
    })
  })
})
  })
  console.log(req.body);
}

function newTask(req, res) {
  res.render('tasks/new', { title: 'New Task' });
}

function show(req, res) {
  Task.find({}, function(err, task){
    res.render('tasks/show', {
      task: task,
      title: 'Task Details'
    });
  })
}

function index(req, res) {
  Task.find({}, function(err, tasks){
    res.render('tasks/index', {
      tasks: tasks,
      title: 'All Tasks',
    })
  })
  
}