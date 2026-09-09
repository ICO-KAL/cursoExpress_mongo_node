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
},{strict: 'throw'});

export default mongoose.model('userSchemas', userSchemas);