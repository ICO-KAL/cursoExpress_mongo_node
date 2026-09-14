import dotenv from 'dotenv';
import path from 'node:path';
import url from 'node:url';
import mongoose from 'mongoose';

export default new class dbClientConections {
        constructor(){
            this.conectionDB();
            this.cerrar();
        }

        async conectionDB(){
            try{
             dotenv.config({ path: new URL('../.env', import.meta.url) });
             this.url = await `mongodb+srv://${process.env.userDB}:${process.env.passwoardDB}@${process.env.conectionDB}/?appName=practicas`;
             await mongoose.connect(this.url); 
             console.log('base de datos conectada..');
            } catch(e){
                console.log('Error por este motivo',e);

            }
        }
        async cerrar(){
            try{
                console.log("base de datos desconectada");
                this.desconectar = await mongoose.disconnect();
                return this.desconectar;
            }catch(e){
                console.log(e);
            }
        }
}