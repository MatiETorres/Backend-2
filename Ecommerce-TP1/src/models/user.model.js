const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true, trim: true },
  last_name:  { type: String, required: true, trim: true },
  email:      { type: String, required: true, unique: true, lowercase: true, trim: true },
  age:        { type: Number },
  password:   { type: String, required: true }, // hashed
  cart:       { type: mongoose.Schema.Types.ObjectId, ref: 'Cart', default: null },
  role:       { type: String, default: 'user' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
