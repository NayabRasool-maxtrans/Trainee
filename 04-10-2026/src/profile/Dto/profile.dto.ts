import { IsDate, IsEmail, IsNotEmpty, isNotEmpty, IsOptional, IsString, isString } from "class-validator"

export class profiledto{
    

    @IsString()
    @IsNotEmpty()
    name:string
    @IsEmail()
    @IsNotEmpty() 
    email:string
    @IsString() 
    password:string
    @IsOptional()
    @IsDate()
    dob?:Date
    @IsOptional()
    @IsString()   
    bio:string
    

}