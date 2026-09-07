import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';


@Controller('products')
export class ProductsController {
    constructor (private readonly productsservice:ProductsService){

    }
    @Get()
    get(){
        return this.productsservice.getproducts();
        
    }
    @Get(':id')
    getbyid(@Param('id')id:string){

        return this.productsservice.getproductsbyid(Number(id));

    }
}
