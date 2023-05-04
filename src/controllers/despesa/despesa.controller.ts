import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Despesa } from 'src/documents/despesa/despesa';
import { DespesaService } from 'src/services/despesa.service/despesa.service';

@Controller('despesa')
export class DespesaController {

    constructor(private despesaService:DespesaService){}

    @Get()
    async getAll(): Promise<Despesa[]>{
        return this.despesaService.getAll();
    }

    @Get()
    async getOne(@Param('id') id:string):Promise<Despesa>{
        return this.despesaService.getbyId(id);
    }

    @Post()
    async create(@Body() despesa: Despesa){
        return this.despesaService.create(despesa);
    }

    @Put('id')
    async patch(@Param('id') id:string,  @Body() despesa: Despesa){
        despesa.id= id;
        return this.despesaService.patch(id, despesa);
    }

    @Delete('id')
    async delete(@Param('id') id:string){
        return this.despesaService.delete(id);
    }



}

