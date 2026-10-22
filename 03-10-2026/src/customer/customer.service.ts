import { Injectable } from '@nestjs/common';
import { customer } from './Interface/customerinterface';
import { customerdto } from './customerdto/create-customerdto';

@Injectable()
export class CustomerService {
    private Customer:customer[]=[{   
    id:1,    
    name:"manikanta setti",
     age:25,
    address:"hyderbad"
}];

    getall():customer[]{
        return this.Customer;
    }
    createcustomer(data:customerdto):customer{
        const newcustomer:customer={
            id:(this.Customer.length)+1,
            ...data
        }
        this.Customer.push(newcustomer);
        console.log(newcustomer)
        return newcustomer;
    }
}
