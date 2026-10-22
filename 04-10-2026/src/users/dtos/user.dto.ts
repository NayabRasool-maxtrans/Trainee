import { IsEmail, isNotEmpty, IsNotEmpty, IsNumber, isNumber, IsOptional, IsString } from "class-validator";
import { CreateDateColumn, Unique } from "typeorm";
import { profiledto } from "../../profile/Dto/profile.dto";



export class userdto{
   
    @IsString()
    @IsNotEmpty()
    name:string;
    @IsNotEmpty()
    @IsEmail()
    email:string;
    @IsString()
    @IsNotEmpty()
    password:string;
    @IsOptional()
    Profile:profiledto;

    
}