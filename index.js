const mongoose = require('mongoose');
const env = require('dotenv');
const path = require('path');
const fileURLToPath = require('node:url'); 

export default class conection {
    constructor(){
       this.conection();
    }

    async conection(){
       try{
           const __filename = fileURLToPath(import.meta.url);
           const __dirname = path.dirname(__filename);
           const dotenv = path.join(__dirname, '..', 'env')
           this.url = ``
           this.conetar = await mongoose.Connection(this.url);
       }
       catch(e){
           console.log(e);
       }
    }
    async extiConection(){
        try{
           this.disconection = mongoose.disconnect();
           console.log('desconectado');
        }
        catch(e){
             console.log(e);
        }
    }
}

const caja = [{id:1, nombre: 'Isaac Concepcion Peralta'},{id:2, nombre: 'Isaac Concepcion Peralta'}];

for (let [key,value] of Object.entries(caja)) {
        console.log(`${key} bueno ${value}`);
}

// otras practicas