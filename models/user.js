const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var userSchema = Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  allergies: {
    type: Schema.Types.ObjectId,
    ref: 'Allergy'
  },
  recipes: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);