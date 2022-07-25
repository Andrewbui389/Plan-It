const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  googleId: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  avatar: {
    type: String,
    default: ''
  },
  Admin: {
    type:Boolean,
    default: false,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
