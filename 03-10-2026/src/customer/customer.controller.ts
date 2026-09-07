import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { customerdto } from './customerdto/create-customerdto';
import { UppercasePipe } from '../common/pipes/uppercase/uppercase.pipe';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerservice:CustomerService){}

    @Get()
    getall(){
        return this.customerservice.getall();

    }
    @Post()
    create(@Body(UppercasePipe) data:customerdto,){

        return this.customerservice.createcustomer(data);

    }
}
