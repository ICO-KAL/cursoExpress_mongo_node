import dbClientConections from '../config/dbClient.js';
import { ObjectId } from 'mongodb';

export default new class login {
    constructor(){}

    async create(user) {
        await dbClientConections.ready;
        const read = await dbClientConections.connect.collection('practicaMongo');
        const create = await read.insertOne(user);
        return create;
    }
    async getAll(){
      const read = dbClientConections.connect.collection('pracitcaMongo');
      return await read.find({}).toArray();
    }

    async getOne(id){
        const read = dbClientConections.connect.collection('pracitcaMongo');
        return await read.findOne({_id: new ObjectId(id)});
    }
    async delete(id){
        const read = dbClientConections.connect.collection('practicaMongo');
        return await read.deleteOne({_id: id});   
    }
    async upDate(id,user){
        const read = dbClientConections.connect.collection('practicaMongo');
        return await read.updateOne({_id: new ObjectId(id)},{$set: user});
    }
}