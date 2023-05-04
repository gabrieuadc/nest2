import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Custo } from 'src/documents/custo/custo';

@Injectable()
export class CustoService {

    constructor(@InjectModel('Custo') private readonly custoModel:Model<Custo>){
         }

         async getAll(){
            return await this.custoModel.find().exec();
        }
        
        async getbyId(id:string){
            return await this.custoModel.findById(id).exec();
        }
        
        async create(custo:Custo){
            const createdCusto= new this.custoModel(custo);
            return await createdCusto.save();
        }
        
        async patch(id:string, custo:Custo){
            await this.custoModel.updateOne({ _id:id}, custo).exec();
            return this.getbyId(id);
        
        }
        
        async delete(id:string){
            return await this.custoModel.deleteOne({_id:id}).exec();
        }
    

}

