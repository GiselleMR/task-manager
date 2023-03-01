const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    description: {
        type: String
       },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    taskDate: {
        type: Date,
        
    }
})

module.exports = mongoose.model("Task", taskSchema);
