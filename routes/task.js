var express = require('express');
var router = express.Router();
const getUser = require('../controllers/users');
const tasksCtrl = require('../controllers/tasks');


// router.get('/', tasksCtrl.index);
// router.get('/new', tasksCtrl.new);
// router.get('/:id', tasksCtrl.show);
// router.post('/', tasksCtrl.create); 
// router.delete('/:id', tasksCtrl.delete);

router.get('/', function(req, res, next) {
  res.render('tasks', { title: 'Manage Tasks' });
  res.send('all tasks')
});

module.exports = router;