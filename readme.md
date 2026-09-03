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