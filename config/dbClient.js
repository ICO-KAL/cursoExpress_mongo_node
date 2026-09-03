require('dotenv').config();
const {MongoClient} = require('mongodb');
const client = new MongoClient();
const url = `mongodb+srv://${process.env.userDB}:${process.env.passwoardDB}@${process.env.conection_DATABASE}/?appName=practicas`;

class dbClientConections {
    constructor(){

    }
    async dbClientConection(){
    try{
        const conection = await client.connect(url); 
        conection.db('practicaMongo'); // nombre de la base de datos
        console.log('base de datos conectada');
    }
    catch(e){
        console.log(e)
    }
}
}

module.exports = dbClientConections;