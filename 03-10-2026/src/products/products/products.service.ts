import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {

    private Products=[{id:1,name:"biscuit",price:20},
        {id:2,name:"chocolate",price:22},{id:3,name:"mangochoco",price:250}
    ];

    getproducts(){


        return this.Products;
    }
    getproductsbyid(id:number){
             const productid= this.Products.find((product)=>product.id===id);
             if(!productid){
                 throw new NotFoundException("id not found..")
             }

             return productid
            


        
        
        
       
           

        
    }
}
