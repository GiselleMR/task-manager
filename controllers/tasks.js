const Task = require('../models/task');

module.exports = {
  index,
  show,
  new: newTask,
  create,
  delete: deleteTask
};

function deleteTask(req, res) {
  Task.deleteOne(req.params.tuna);
  res.redirect('/tasks');
}

function create(req, res) {
  console.log(req.body);
  Task.create(req.body);
  res.redirect('/tasks');
}

function newTask(req, res) {
  res.render('tasks/new', { title: 'New Task' });
}

function show(req, res) {
  res.render('tasks/show', {
    task: Task.getOne(req.params.id),
    title: 'Task Details'
  });
}

function index(req, res) {
  res.render('tasks/index', {
    tasks: Task.getAll(),
    title: 'All Tasks'
  });
}