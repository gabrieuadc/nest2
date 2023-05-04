import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Empregado } from 'src/documents/empregado/empregado';

@Injectable()
export class EmpregadoService {

    constructor(@InjectModel('Empregado') private readonly empregadoModel: Model<Empregado>){}

    async getAll(){
        return await this.empregadoModel.find().exec();
    }
    
    async getbyId(id:string){
        return await this.empregadoModel.findById(id).exec();
    }
    
    async create(empregado:Empregado){
        const createdempregado= new this.empregadoModel(empregado);
        return await createdempregado.save();
    }
    
    async patch(id:string, empregado:Empregado){
        await this.empregadoModel.updateOne({ _id:id}, empregado).exec();
        return this.getbyId(id);
    
    }
    
    async delete(id:string){
        return await this.empregadoModel.deleteOne({_id:id}).exec();
    }


}



