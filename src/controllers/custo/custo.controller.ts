import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Custo } from 'src/documents/custo/custo';
import { CustoService } from 'src/services/custo.service/custo.service';

@Controller('custo')
export class CustoController {

    constructor(private custoService:CustoService){    }

        @Get()
        async getAll(): Promise<Custo[]>{
            try{
                return this.custoService.getAll();
            }
            catch (error) {
                throw new BadRequestException(error);
            }
        }
    
        @Get()
        async getOne(@Param('id') id:string):Promise<Custo>{
            try{
                return this.custoService.getbyId(id);
            }
            catch (error) {
                throw new BadRequestException(error);
            }
        }
    
        @Post()
        async create(@Body() custo: Custo){
            try{
                return this.custoService.create(custo);
            }
            catch (error) {
                throw new BadRequestException(error);
            }
        }
    
        @Put('id')
        async patch(@Param('id') id:string,  @Body() custo: Custo){
            try{
                custo.id= id;
                return this.custoService.patch(id, custo);
            }
            catch (error) {
                throw new BadRequestException(error);
            }
        }
    
        @Delete('id')
        async delete(@Param('id') id:string){
            try{
                return this.custoService.delete(id);             
            }
            catch (error) {
                throw new BadRequestException(error);
            }
        }





}

