require('dotenv').config();
const express = require('express');

const app = express();

// configuraciones

// middleware
const PORT = process.env.PORT;
app.listen(PORT,()=> console.log('El servidor esta arrancando en: ' + PORT));

    