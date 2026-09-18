import { IsDecimal, IsEnum, IsNotEmpty, IsString } from "class-validator"
import { EnumType } from "typescript"
enum mealtype{
    VEG="VEG",
    NON_VEG="NON_VEG",
    VEGAN="VEGAN"


}

export class updatemealsdto{
    @IsNotEmpty()
    @IsString()
    name:string
    @IsNotEmpty()
    @IsEnum(mealtype)
    meal_type:mealtype
    @IsNotEmpty()
    @IsString()
    duration_days:number
    @IsNotEmpty()
    @IsDecimal()
    price:number
}