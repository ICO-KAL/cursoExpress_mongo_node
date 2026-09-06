import dbClientConections from '../config/dbClient.js';

export default new class login {
    constructor(){}

    async create(user) {
        const read = dbClientConections.connect.collection('practicaMongo');
        const create = read.insertOne(user)
    }
}