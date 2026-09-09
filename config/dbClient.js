import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import mongoose from 'mongoose';

export default new class dbClientConections {
        constructor(){
            this.conectionDB();
        }

        async conectionDB(){
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
            const envPath = path.join(__dirname, '..', '.env');
            dotenv.config({path: envPath});
            try{
             this.url = `mongodb+srv://${process.env.userDB}:${process.env.passwoardDB}@${process.env.conectionDB}/?appName=practicas`;
             await mongoose.connect(this.url); 
             this.connect = null;
            } catch(e){
                console.log(e);
            }
        }
        async cerrar(){
            try{
                await mongoose.disconnect();
                return "conexion terminada";
            }catch(e){
                console.log(e);
            }
        }
}