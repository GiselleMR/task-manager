var express = require('express');
var router = express.Router();
const getUser = require('../controllers/users');
const createTask = require('../controllers/tasks');

router.post('/', async function(req, res){
    const body = JSON.parse(req.body)
    console.log(body);
    const user = await getUser(body.name)
    const task = await createTask(user)
    res.json(task)
})

module.exports = router;