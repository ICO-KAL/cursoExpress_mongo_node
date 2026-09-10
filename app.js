import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/login.js';
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';

const app = express();
const login = routes;

// configuraciones
//app.set('view-routes', path.join(__dirname, 'routes'));

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/login',login);
//puerto
try{
   const PORT = process.env.PORT;
   app.listen(PORT,()=> console.log('El servidor esta arrancando en: ' + PORT));
}catch(e){
   console.log(e);
}


process.on('SIGABRT', async () =>{
   await dbClient.cerrar(),
   await process.exit(0);
});
    