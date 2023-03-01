const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskDateSchema = new Schema({
  date: {
    type: Date
  },
  task: [
  {
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }},
  {
  timestamps: true
});

module.exports = mongoose.model("TaskDate", taskDateSchema);