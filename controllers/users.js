const User = require('../models/user');

async function getUser (name){
    const user = await User.find({
        name
    }) 
    return user
}

module.exports = getUser;