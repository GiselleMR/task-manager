const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskDate = new Schema({
    date: Date,
    task: {
        type: Schema.Types.ObjectId,
        ref: "Task"
    }
}) 

module.exports = mongoose.model("TaskDate", taskDate);