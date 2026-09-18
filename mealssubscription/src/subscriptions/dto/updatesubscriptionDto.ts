import { Type } from "class-transformer"
import { IsDate, IsEnum, IsInt, IsNotEmpty } from "class-validator"


enum STATUS{
    ACTIVE="ACTIVE",
    CANCELLED="CANCELLED",
    COMPLETED="COMPLETED"
}

export class updatesubscriptiondto{
    @IsDate()
    @IsNotEmpty()
    @Type(()=>Date)
    start_date:Date
    @IsDate()
    @IsNotEmpty()
    @Type(()=>Date)
    end_date:Date
    @IsEnum(STATUS)
    status?:STATUS
    @IsInt()
    @IsNotEmpty()
    users_id:number
    @IsInt()
    @IsNotEmpty()
    meals_id:number

}