import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Estoque } from 'src/documents/estoque/estoque';

@Injectable()
export class EstoqueService {

    constructor(@InjectModel('Estoque') private readonly estoqueModel: Model<Estoque>){}

        async getAll(){
            return await this.estoqueModel.find().exec();
        }
        
        async getbyId(id:string){
            return await this.estoqueModel.findById(id).exec();
        }
        
        async create(estoque:Estoque){
            const createdestoque= new this.estoqueModel(estoque);
            return await createdestoque.save();
        }
        
        async patch(id:string, estoque:Estoque){
            await this.estoqueModel.updateOne({ _id:id}, estoque).exec();
            return this.getbyId(id);
        
        }
        
        async delete(id:string){
            return await this.estoqueModel.deleteOne({_id:id}).exec();
        }
        
    }

// constructor(@InjectModel('estoque') private readonly estoqueModel: Model<Login>){

// }

