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
             this.connect = null;
             this.ready = this.dbClientConection();
        }
    async dbClientConection(){
            try{
                await this.client.connect(); 
                this.connect = this.client.db('practicaMongo');
                console.log('base de datos conectada');
                return this.connect;
            }
            catch(e){
                console.log('un error por esto',e);
                throw e;
            }
    }
}
export default new dbClientConections();