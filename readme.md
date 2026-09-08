# proyecto basico en el backen usando Express y mongo y nodejs
se implemento la app.js que registra todos los procesos al pie de la letra para deversas implementaciones 
aprenderemos hacer un crud entre otras funcionalidades que ya sabremos exactamente 
entre otras cosas mas 

se aprendio hacer un crud que tiene que ver con lo siguiente 
``` 
    routes.get('/:id',(res,req)=>{}); // leer 
    routes.get('/',(res,req)=>{}); // leer todos los registros
    routes.put('/:id',(res,req)=>{}) // actuaalizar el registro
    routes.post('/:id',(res,req)=>{}) // crear un usuario
    routes.delete('/:id',(res,req)=>{}); //  eliminar los registros
    
 ```

 # implementaciones y lo que aprendi

 lo que aprendi fue que se hizo una conexion distinta a una conexion a base de datos 
 se tiene que usar la palabra clave class para importar los requerimientos como objectos es importante que sepas eso
 tambien se hizo esto de la conexion de la base de datos 

 ```
    import dotenv from 'dotenv';
    import path from 'node:path';
    import { fileURLToPath } from 'node:url';
    import {MongoClient} from 'mongodb';

    class dbClientConections {
            constructor(){
                const __filename = fileURLToPath(import.meta.url);
                const __dirname = path.dirname(__filename);
                const envPath = path.join(__dirname, '..', '.env');
                dotenv.config({path: envPath}); 
                this.url = `mongodb+srv://${process.env.userDB}:${process.env.passwoardDB}@${process.env.conectionDB}/?appName=practicas`;
                this.client = new MongoClient(this.url);
                this.dbClientConection();
            }
        async dbClientConection(){
                try{
                    await this.client.connect(); 
                    this.connect = this.client.db('practicaMongo');
                    console.log('base de datos conectada');
                }
                catch(e){
                    console.log('un error por esto',e)
                }
                finally{
                    this.client.close();
                }
        }
    }
    export default new dbClientConections();
 ```

 ten encuenta que leer la ruta del archivo se usa path ver la ruta se usa url entendido ya con esto todo ira bien 
 ahora se aprendio implementar un create en el controller y cuando el usuario crea un archivo pasa por models
 para crear ese archivo de manera "limpia" pero eso seria.

 # lo que se aprendio
  

se aprendio hacer un crud en mongo hay algunas implementaciones que se aprendieron como cuales
el insertOne() // esto permite que insertar datos
el upDateOne()// actualizar los datos
el deleteOne() // eliminar
el find() // es mirar todos los registros
el findOne() // esto permite mirar todos los registros existentes

tienes que mirar el loginController.js para ver como se implemento en los controladores
tambien mira el modls para que veas como se implemento cada cosa al pie de la letra

// lo que se tiene que hacer es lo siguiente
corregir los errores que hay en el codigo porque no presenta los datos en la api de thunder clain entre otros