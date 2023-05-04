import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Service } from 'src/documents/service/service';
import { ServiceService } from 'src/services/service.service/service.service';

@Controller('service')
export class ServiceController {

    constructor(private serviceService:ServiceService){}

    @Get()
    async getAll(): Promise<Service[]>{
        try{
            return this.serviceService.getAll();
        }
        catch (error) {
                throw new BadRequestException(error);
            }
    }

    @Get()
    async getOne(@Param('id') id:string):Promise<Service>{
        try{
            return this.serviceService.getbyId(id);
        }
        catch (error) {
                throw new BadRequestException(error);
            }
    }

    @Post()
    async create(@Body() service: Service){
        try{
            return this.serviceService.create(service);
        }
        catch (error) {
                throw new BadRequestException(error);
            }
    }

    @Put('id')
    async patch(@Param('id') id:string,  @Body() service: Service){
        try{
            service.id= id;
            return this.serviceService.patch(id, service);
        }
        catch (error) {
                throw new BadRequestException(error);
            }
    }

    @Delete('id')
    async delete(@Param('id') id:string){
        try{
            return this.serviceService.delete(id);
        }
        catch (error) {
                throw new BadRequestException(error);
            }
    }



}

