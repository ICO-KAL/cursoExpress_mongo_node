import models from '../models/models.js';

export default class loginController{
    constructor(){
    
    }

   async upDate(req, res){
         try{
            const {id} = req.params;
            const updata = await models.upDate(id);
            res.status(202).send('todo funciona correctamente en upDate');
         }
         catch(e){
            res.status(500).send('no funciona correctamente tienes que intentar de nuevo');
         }
    }

   async create(req, res){
           try{
            const body = req.body;
            const insert = await models.create(body);
            res.status(202).json({message: 'usuario creado'},insert);
         }
         catch(e){
            res.status(500).send('El Error es este');
            console.log(e);
         }
    }
    
   async delete(req, res){
           try{
            const {id} = req.params;
            const eliminar = await models.delete(id);
            res.status(202).send(eliminar);
         }
         catch(e){
            res.status(500).send('no funciona correctamente tienes que intentar de nuevo');
         }
    }

   async getAll(req, res){
        try{
            const data  = await models.getAll();
            res.status(202).json(data);
         }
         catch(e){
            res.status(500).send('no funciona correctamente tienes que intentar de nuevo');
         }
    }
   async getOne(req, res){
        try{
            const {id} = req.params;
            const data  = await models.getOne(id);
            res.status(202).json(data);
         }
         catch(e){
            res.status(500).send('no funciona correctamente tienes que intentar de nuevo');
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
