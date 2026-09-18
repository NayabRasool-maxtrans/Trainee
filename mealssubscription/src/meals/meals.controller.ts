import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { MealsService } from './meals.service';
import { mealdto } from './dto/mealsdto';
import { updatemealsdto } from './dto/mealsupdatedto';

@Controller('meals')
export class MealsController {
    constructor(@Inject() private readonly mealsservice:MealsService){}

    //get all
    @Get()
    getall(){
        return this.mealsservice.getall();

    }

    //get by id
    @Get(':id')
    getbyid(@Param('id',ParseIntPipe)id:number){
        return this.mealsservice.getbyid(id);
    }

    //delete by id
    @Delete(':id')
    deletebyid(@Param('id',ParseIntPipe)id:number){
        return this.mealsservice.Deletebyid(id)

    }

    // create a new meal
    @Post()
    createmeal(@Body()dto:mealdto){
        return this.mealsservice.createmeal(dto)
    }

    //update meal

    @Put(':id')
    updatemeal(@Param('id',ParseIntPipe)id:number,@Body()dto:updatemealsdto){
        
        return this.mealsservice.update(id,dto)
    }
}
