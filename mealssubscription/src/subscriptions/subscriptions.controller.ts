import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { subscriptiondto } from './dto/susbdto';
import { updatesubscriptiondto } from './dto/updatesubscriptionDto';

@Controller('subscriptions')
export class SubscriptionsController {
    
    constructor(@Inject()private readonly subservice:SubscriptionsService){}

    @Get('user/:id')
    get(@Param('id',ParseIntPipe)id:number){
        return this.subservice.listbyuser(id)

    }

    //create
    @Post()
    create(@Body()dto:subscriptiondto){
        return this.subservice.create(dto)


    }
    //get by id
    @Get(':id')
    getbyid(@Param('id',ParseIntPipe)id:number){
        return this.subservice.getbyid(id)
    }

    //get all subs
    @Get()
    getall(){
        return this.subservice.findall();
    }



    //canacel or unsubscribe
    @Put(':id')
    cancel(@Param('id')id:number,@Body()dto:updatesubscriptiondto){
        return this.subservice.cancel(id,dto)

    }

}
