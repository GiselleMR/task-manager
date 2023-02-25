const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    googleId: {
      type: String,
      required: true
    },
    email: String,
    tasks: [{
      type: Schema.Types.ObjectId,
      ref: "Task"
    }]
  }, {
    timestamps: true
  });

module.exports = mongoose.model('User', userSchema);
