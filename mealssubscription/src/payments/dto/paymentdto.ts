import { Type } from "class-transformer";
import { IS_ENUM, IsDecimal, IsEnum, IsInt, IsNotEmpty, IsNumber, Min, min } from "class-validator";
enum PAYMENTSTATUS{
    PENDING='PENDING',
    SUCCESS='SUCCESS',
    FAILED='FAILED',
    REFUND='REFUND'

}

export class paymentdto{
    /*
    @IsNumber({maxDecimalPlaces:2})
    @Type(()=>Number)
    amount:number
    */
    @IsNotEmpty()
    @IsEnum(PAYMENTSTATUS)
    status:PAYMENTSTATUS
    @IsInt()
    @IsNotEmpty()
    subscription_id:number

}