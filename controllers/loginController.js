import models from '../models/models.js';

class loginController{
    constructor(){
    
    }

   async upDate(req, res){
         try{
            res.status(202).send('todo funciona correctamente en upDate');
         }
         catch(e){
            res.status(500).send('no funciona correctamente tienes que intentar de nuevo');
         }
    }

   async create(req, res){
           try{
            const insert = models.create(req.body);
            res.status(202).json({message: 'usuario creado'},insert);
         }
         catch(e){
            res.status(500).send('no funciona correctamente tienes que intentar de nuevo');
         }
    }
    
   async delete(req, res){
           try{
            res.status(202).send('todo funciona correctamente en delete');
         }
         catch(e){
            res.status(500).send('no funciona correctamente tienes que intentar de nuevo');
         }
    }

   async getAll(req, res){
        try{
            res.status(202).send('todo funciona correctamente en getAll');
         }
         catch(e){
            res.status(500).send('no funciona correctamente tienes que intentar de nuevo');
         }
    }
   async getOne(req, res){
        try{
            res.status(202).send('todo funciona correctamente en getOne');
         }
         catch(e){
            res.status(500).send('no funciona correctamente tienes que intentar de nuevo');
         }
    }
}
export default loginController;

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
