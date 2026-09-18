import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { paymentdto } from './dto/paymentdto';
import { PaymentsService } from './payments.service';
import { upadetPaymentDto } from './dto/paymentupdate';

@Controller('payments')
export class PaymentsController {
    constructor(@Inject() private readonly paymentserv:PaymentsService){}

    //create payment
    @Post()
    create(@Body()dto:paymentdto){

        return this.paymentserv.create(dto)

    }
    //getall payments

    @Get()
    getall(){
        return this.paymentserv.getall()
    }
    @Get(':id')
    getbysubscription(@Param('id')id:number){
        return this.paymentserv.listbysubscription(id);
    }


    //refund amount
@Put(':id')
    refundamount(@Param('id',ParseIntPipe)id:number,@Body()dto:upadetPaymentDto){

        return this.paymentserv.refundamount(id,dto)

    }
}
