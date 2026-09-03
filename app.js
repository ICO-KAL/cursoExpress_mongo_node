import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/login.js';

const app = express();
const login = routes;

// configuraciones
//app.set('view-routes', path.join(__dirname, 'routes'));

// middleware
app.use('/login',login);
//puerto
const PORT = process.env.PORT;
app.listen(PORT,()=> console.log('El servidor esta arrancando en: ' + PORT));

    