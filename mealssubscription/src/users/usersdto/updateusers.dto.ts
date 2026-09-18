import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator"

export class updateusersdto{
    @IsString()
    @IsNotEmpty()
    name?:string
    @IsNotEmpty()
    @IsEmail()
    email:string
    @IsString()
    @IsNotEmpty()
    phone?:number

}