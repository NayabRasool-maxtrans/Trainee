import { Type } from "class-transformer"
import { IsEmail, IsIn, IsInt, IsNotEmpty, IsString } from "class-validator"

export class usersdto{
    @IsString()
    @IsNotEmpty()
    name:string
    @IsNotEmpty()
    @IsEmail()
    email:string
    @IsString()
    @IsNotEmpty()
    phone:number

}