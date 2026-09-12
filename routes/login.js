import loginController from '../controllers/loginController.js';
import express from 'express';

const routes = express.Router();

routes.post('/register',loginController.register);
routes.post('/login',loginController.login);
//routes.put('/:id',userController.upDate);

export default routes;