import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Login } from 'src/documents/login/login';

@Injectable()
export class LoginService {


    constructor(@InjectModel('User') private readonly userModel: Model<Login>){

    }

    async getAll(){
        return await this.userModel.find().exec();
    }

    async getbyId(id:string){
        return await this.userModel.findById(id).exec();
    }

    async create(user:Login){
        const createdUser= new this.userModel(user);
        return await createdUser.save();
    }

    async patch(id:string, user:Login){
        await this.userModel.updateOne({ _id:id}, user).exec();
        return this.getbyId(id);

    }

    async delete(id:string){
        return await this.userModel.deleteOne({_id:id}).exec();
    }

}
