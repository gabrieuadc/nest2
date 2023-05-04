import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Login } from 'src/documents/login/login';
import { LoginService } from 'src/services/login.service/login.service';

@Controller('login')
export class LoginController {

    constructor(private loginService:LoginService){

    }


    @Get()
    async getAll(): Promise<Login[]>{
    try{
        return this.loginService.getAll();
    }
    catch (error) {
            throw new BadRequestException(error);
        }

    }

    @Get()
    async getOne(@Param('id') id:string):Promise<Login>{
        try{
            return this.loginService.getbyId(id);
        }
        catch (error) {
                throw new BadRequestException(error);
            }
    }

    @Post()
    async create(@Body() login: Login){
        try{
            return this.loginService.create(login);
        }
        catch (error) {
                throw new BadRequestException(error);
            }
    }

    @Put('id')
    async patch(@Param('id') id:string,  @Body() login: Login){
        try{
            login.id= id;
            return this.loginService.patch(id, login);
        }
        catch (error) {
                throw new BadRequestException(error);
            }
    }

    @Delete('id')
    async delete(@Param('id') id:string){
        try{
            return this.loginService.delete(id);
        }
        catch (error) {
                throw new BadRequestException(error);
            }
    }


}
