//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const userSchemas = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  passwoard: {
    type: Number,
    required: true,
    min: [8, 'debe de tener al menos 8 caracteres'],
    max:[30, 'no puede tener mas caracteres'],
    function(){
      // funcion por si no te convence algo para hacer una validacion de eso
    }
  },
  active: {
    type: Boolean,
    default: false,
    isTrue(){
      if(!isActive){
        return'no esta activo el usuario';
      }
    }
  }
},{strict: 'throw'});

export default mongoose.model('userSchemas', userSchemas);