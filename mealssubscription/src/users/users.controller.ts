import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersdto } from './usersdto/users.dto';
import { updateusersdto } from './usersdto/updateusers.dto';

@Controller('users')
export class UsersController {
    constructor(@Inject() private readonly userservice:UsersService){}

    //get
    @Get()
    getall(){
        return this.userservice.find()
    }
    @Get(':id')
    getbyid(@Param('id',ParseIntPipe)  id:number){
        return this.userservice.findbyid(id)
    }
     @Delete(':id')
    deletbyid(@Param('id',ParseIntPipe) id:number){
        return this.userservice.deletebyid(id)
    }

    //new users

    @Post()
    newuser(@Body()data:usersdto){
        return this.userservice.createuser(data);
    }
    @Put(':id')
    update(@Param('id',ParseIntPipe)id:number,@Body()updatedto:updateusersdto){
        
        return this.userservice.update(id,updatedto)

    }



    
}
