const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    description: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    taskDate: {
        type: Schema.Types.ObjectId,
        ref: "TaskDate"
    }
})

module.exports = mongoose.model("Task", taskSchema);
