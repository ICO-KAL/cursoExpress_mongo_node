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
const PORT = process.env.PORT;
app.listen(PORT,()=> console.log('El servidor esta arrancando en: ' + PORT));

process.on('SIGABRT', async () =>{
   dbClient.cerrar(),
   process.exit(0);
});
    