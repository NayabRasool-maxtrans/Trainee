import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { userdto } from './dtos/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userservice:UsersService){}
    
    
    @Get()
    getall(){
        return this.userservice.getall();
    }
    @Post()
    insert(@Body() user:userdto){
        return this.userservice.createuser(user);

    }
    @Delete(':id')
    deletebyid(@Param('id') id:number){
        return  this.userservice.deletedbyid(id)

    }
    /*
    @Post()
    newuser(@Body() user:userdto){
       return this.userservice.create(user);


    }
    @Put(':id')
    update(@Body() update:userdto,@Param('id') id:number){
        return this.userservice.update(update,Number(id))

    }
    @Delete(':id')
    deletebyid(@Param('id') id:number){
        return this.userservice.delete(Number(id))

    }
    @Get(':id')
    findbyid(@Param('id',ParseIntPipe) id:number){
        return this.userservice.getbyid(id);

    }
        */
}
