import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {   //using custom pipes here 
  transform(value: any, metadata: ArgumentMetadata) {
    if(typeof value==='object' || typeof value!==null){ //our return type object 
         for(let key of Object.keys(value)){
          //console.log("key",key)
          if(typeof value[key]==='string'){ //object value is string then convert to uppercase
            value[key]=value[key].toUpperCase();
            //console.log(value[key])
          }

         }
    }
    return value;
  }
}
