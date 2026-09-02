require('dotenv').config();
const express = require('express');

const app = express();
const login = require('./routes/login');

// configuraciones
//app.set('view-routes', path.join(__dirname, 'routes'));

// middleware
app.use('/login',login);
//puerto
const PORT = process.env.PORT;
app.listen(PORT,()=> console.log('El servidor esta arrancando en: ' + PORT));

    