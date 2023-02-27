const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskDateSchema = new Schema({
  date: {
    type: Date
  },
  event: [
  {
    type: Schema.Types.ObjectId,
    ref: 'Event'
  }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }},
  {
  timestamps: true
});

module.exports = mongoose.model("TaskDate", taskDate);