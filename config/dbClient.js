import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import mongoose from 'mongoose';

export default new class dbClientConections {
        constructor(){
            this.conectionDB();
        }

        async conectionDB(){
            try{
                const __filename = fileURLToPath(import.meta.url);
                const __dirname = path.dirname(__filename);
                const envPath = path.join(__dirname, '..', '.env');
                dotenv.config({path: envPath});
             this.url = `mongodb+srv://${process.env.userDB}:${process.env.passwoardDB}@${process.env.conectionDB}/?appName=practicas`;
             await mongoose.connect(this.url); 
             this.connect = null;
             console.log('base de datos conectada..');
            } catch(e){
                console.log('Error por este motivo',e);
            }
        }
        async cerrar(){
            try{
                console.log("base de datos desconectada");
                this.desconectar = await mongoose.disconnect();
            }catch(e){
                console.log(e);
            }
        }
}