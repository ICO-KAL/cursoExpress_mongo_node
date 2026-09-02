const LoginController = require('../controllers/loginController');
//const userController = require('../controllers/loginController');
const express = require('express');

const routes = express.Router();
const loginController = new LoginController();

routes.get('/:id', loginController.getAll); // leer
routes.get('/', loginController.getOne); // leer todo
routes.put('/:id', loginController.upDate); // actuaalizar el registro
routes.post('/:id', loginController.create); // crear un usuario
routes.delete('/:id', loginController.delete); // eliminar los registros */
//routes.put('/:id',userController.upDate);

module.exports = routes;