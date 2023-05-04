import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from 'src/documents/service/service';

@Injectable()
export class ServiceService {

    constructor(@InjectModel('Service') private readonly serviceModel:Model<Service>){}
    
    async getAll(){
        return await this.serviceModel.find().exec();
    }
    
    async getbyId(id:string){
        return await this.serviceModel.findById(id).exec();
    }
    
    async create(service:Service){
        const createdservice= new this.serviceModel(service);
        return await createdservice.save();
    }
    
    async patch(id:string, service:Service){
        await this.serviceModel.updateOne({ _id:id}, service).exec();
        return this.getbyId(id);
    
    }
    
    async delete(id:string){
        return await this.serviceModel.deleteOne({_id:id}).exec();
    }
    

}

