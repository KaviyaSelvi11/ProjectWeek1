const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');  // For hashing passwords
const jwt = require('jsonwebtoken'); // For generating JWT

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,  // Ensures no two users can have the same email
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash the password before saving the user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();  // Only hash password if it's being modified
  
  try {
    const salt = await bcrypt.genSalt(10);  // Generate a salt with 10 rounds
    this.password = await bcrypt.hash(this.password, salt);  // Hash the password
    next();  // Continue with the save operation
  } catch (err) {
    next(err);  // Pass error to the next middleware
  }
});

// Method to check if the password matches
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Method to generate JWT token
userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ id: this._id }, 'your_jwt_secret_key', { expiresIn: '1h' });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
