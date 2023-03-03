const Task = require('../models/task');
const User = require('../models/user');
const TaskDate = require('../models/taskDate');
const taskDate = require('../models/taskDate');
const task = require('../models/task');

module.exports = {
  index,
  show,
  new: newTask,
  create,
  delete: deleteTask,
  update: updateTask,
  edit
};

function updateTask(req, res) {
  console.log(req.params);
  task.findById(req.params.id, function (err, task){
    console.log('hello', report);
    task.task = req.body.task;
    task.save(function(err){
      res.redicet('/tasks/${req.params.vehicleId}');
    })
  })
}

function edit(req, res) {
  Task.findOne({'tasks._id': req.params.id}, function(err, task) {
    const comment = book.comments.id(req.params.id);
    res.render('tasks/edit', {comment});
  });
}

// function updateTask(req, res) {
//   Task.findByIdAndUpdate(req.params._id, function(err){
//     res.redirect('/tasks');
//   });
// }

function editTask(req, res) {
  task.findOne({'tasks._id': req.params.id}, function(err, book) {
    const task = task.tasks.id(req.params.id);
    res.render('tasks/edit', {task});
  });
}

function deleteTask(req, res) {
  console.log("REQ.PARAMS");
  console.log(req.params.id);
  Task.findByIdAndDelete(req.params.id, function(err){
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
  console.log("req.user", req)
  Task.find({user:req.user._id}, function(err, tasks){
    res.render('tasks/index', {
      tasks: tasks,
      title: 'All Tasks',
    })
  })
  
}