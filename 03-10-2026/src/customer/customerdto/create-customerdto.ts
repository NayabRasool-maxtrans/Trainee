
import { IsInt, isInt, IsString, isString } from "class-validator";
import { isConstTypeReference } from "typescript";

export class customerdto{
   @IsString()
    name:string;
    @IsInt()
    age:number;
    @IsString()
    address:string;
}