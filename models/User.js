const mongoose = require('mongoose');
Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  articles: {
    type: [ObjectId],
  }
});

module.exports = mongoose.model('User', userSchema);
