var express = require('express');
var router = express.Router();
const getUser = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/:name', async function(req, res) {
  const name = req.params.name
  const user = await getUser(name)
  console.log(user);
  res.json(user)
});

module.exports = router;
