import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Estoque } from 'src/documents/estoque/estoque';
import { EstoqueService } from 'src/services/estoque.service/estoque.service';

@Controller('estoque')
export class EstoqueController {

    constructor(private estoqueService:EstoqueService){}

    @Get()
    async getAll(): Promise<Estoque[]>{
        try{
            return this.estoqueService.getAll();
        }
        catch (error) {
            throw new BadRequestException(error);
        }
    }

    @Get()
    async getOne(@Param('id') id:string):Promise<Estoque>{
        try{
            return this.estoqueService.getbyId(id);
        }
        catch (error) {
            throw new BadRequestException(error);
        }
    }

    @Post()
    async create(@Body() estoque: Estoque){
        try{
            return this.estoqueService.create(estoque);
        }
        catch (error) {
            throw new BadRequestException(error);
        }
    }

    @Put('id')
    async patch(@Param('id') id:string,  @Body() estoque: Estoque){
        try{
            estoque.id= id;
            return this.estoqueService.patch(id, estoque);
        }
        catch(error){
            throw new BadRequestException(error);
        }

    }

    @Delete('id')
    async delete(@Param('id') id:string){
        try{
            return this.estoqueService.delete(id);
        }
        catch(error)
        {
            throw new BadRequestException(error);
        }

    }

}