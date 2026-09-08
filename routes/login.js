import LoginController from '../controllers/loginController.js';
//const userController = require('../controllers/loginController');
import express from 'express';

const routes = express.Router();
const loginController = new LoginController();

routes.get('/:id', loginController.getOne); // leer
routes.get('/', loginController.getAll); // leer todo
routes.put('/:id', loginController.upDate); // actuaalizar el registro
routes.post('/', loginController.create); // crear un usuario
routes.delete('/:id', loginController.delete); // eliminar los registros */
//routes.put('/:id',userController.upDate);

export default routes;