import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Despesa } from 'src/documents/despesa/despesa';

@Injectable()
export class DespesaService {

    constructor(@InjectModel('Despesa') private readonly despesaModel:Model<Despesa>){}

    async getAll(){
        return await this.despesaModel.find().exec();
    }
    
    async getbyId(id:string){
        return await this.despesaModel.findById(id).exec();
    }
    
    async create(despesa:Despesa){
        const createddespesa= new this.despesaModel(despesa);
        return await createddespesa.save();
    }
    
    async patch(id:string, despesa:Despesa){
        await this.despesaModel.updateOne({ _id:id}, despesa).exec();
        return this.getbyId(id);
    
    }
    
    async delete(id:string){
        return await this.despesaModel.deleteOne({_id:id}).exec();
    }


}
