//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const userSchemas = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  passwoard: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
});
export default mongoose.model('userSchemas', userSchemas);