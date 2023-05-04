import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Empregado } from 'src/documents/empregado/empregado';
import { EmpregadoService } from 'src/services/empregado.service/empregado.service';

@Controller('empregado')
export class EmpregadoController {

    constructor(private empregadoService:EmpregadoService){}

    
    @Get()
    async getAll(): Promise<Empregado[]>{
        try{
            return this.empregadoService.getAll();
        }
        catch (error) {
            throw new BadRequestException(error);
        }
    }

    @Get()
    async getOne(@Param('id') id:string):Promise<Empregado>{
        try{
            return this.empregadoService.getbyId(id);
        }
        catch (error) {
            throw new BadRequestException(error);
        }
    }

    @Post()
    async create(@Body() empregado: Empregado){
        try{
            return this.empregadoService.create(empregado);
        }
        catch (error) {
            throw new BadRequestException(error);
        }
    }

    @Put('id')
    async patch(@Param('id') id:string,  @Body() empregado: Empregado){
        try{
            empregado.id= id;
            return this.empregadoService.patch(id, empregado);
        }
        catch (error) {
            throw new BadRequestException(error);
        }
    }

    @Delete('id')
    async delete(@Param('id') id:string){
        try{
            return this.empregadoService.delete(id);
        }
        catch (error) {
            throw new BadRequestException(error);
        }
    }

}
