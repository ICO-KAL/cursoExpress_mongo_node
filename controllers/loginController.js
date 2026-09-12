import models from '../models/models.js';
import bcrypt from 'bcryptjs';

export default new class loginController{
   constructor(){
   }

   async register(req, res){
      try{
         const {name,passwoard,email} = req.body;
            
         const read = await models.getOne({email});
         if(read) return res.status(400).json({error: 'usuario existente'});
   
         const encrytar = await bcrypt.hash(passwoard, 6);
         const createUser = await models.create({
            nombre: name,
            email,
            passwoard: encrytar
         });
         res.status(202).json({
            message: 'usuario creado',
            createUser
         });
      }
      catch(e){
          console.log(e);
      }
   }
   async login(req,res){
      try{
         const {email,passwoard} = req.body;
         const read = await models.getOne({email});

         if(!read) res.status(400).json({error: "usuario existente"});

         const nose = await bcrypt.compare(passwoard,read.passwoard);
         res.status(200).json({message: "Bienvenido"});
      }
      catch(e){
          console.log(e);
      }
   }
    
}


/* const caja = [];

function user(){
   const upDate = async (req,res) => {
       try{
          res.status(202).send('usuario creado');
       }
       catch(e){
          res.status(500).send('no funciona')
       }
   }
} */  // esto solo es una prueba
