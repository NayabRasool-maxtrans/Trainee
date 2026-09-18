import { IsDecimal, IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator"
import { EnumType } from "typescript"
enum mealtype{
    VEG="VEG",
    NONVEG="NONVEG",
    VEGAN="VEGAN"
}

export class mealdto{
    @IsNotEmpty()
    @IsString()
    name:string
    @IsNotEmpty()
    @IsEnum(mealtype)
    meal_type:mealtype
    @IsNotEmpty()
    @IsInt()
    duration_days:number
    @IsNotEmpty()
    @IsDecimal()
    price:number
}