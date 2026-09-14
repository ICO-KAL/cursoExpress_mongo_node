//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const userSchemas = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  passwoard: {
    type: String,
    required: true,
    min: [8, 'debe de tener al menos 8 caracteres'],
    max:[30, 'no puede tener mas caracteres']
  },
  email: {
    type: String,
    required: [true, 'El correo electrónico es obligatorio'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, ingresa un correo electrónico válido']
  },
  active: {
    type: Boolean,
    default: false,
    isTrue(){
      if(!isActive) return 'el usuario no esta activo';
    }
  }
},{strict: 'throw'});

export default mongoose.model('userSchemas', userSchemas);