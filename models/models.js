import mongoose from "mongoose";
import User from "../schemas/user.js";

export default new class login {
    constructor(){
    }

    async create(user) {
        return await User.create(user); 
    }
    async getAll(){
       return await User.find()
    }

    async getOne(id){
        return await User.findById(id);
    }
    
    async delete(id){
        return await User.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)}); 
    }
    async upDate(id,user){
       return await User.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, user, {new: true});
    }
}