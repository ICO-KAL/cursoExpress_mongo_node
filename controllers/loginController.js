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
            res.status(202).send('todo funciona correctamente en create');
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

module.exports = loginController;