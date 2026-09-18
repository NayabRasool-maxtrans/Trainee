import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EnumType } from "typescript";
import { subscription } from "../../subscriptions/entity/subscription";

enum mealtype{
    VEG="VEG",
    NONVEG="NONVEG",
    VEGAN="VEGAN"
}

@Entity()
export class mealsplan{
    @PrimaryGeneratedColumn()
    id:number
    @Column({type:'varchar',length:100})
    name:string
    @Column({type:'enum',enum:mealtype})
    meal_type:mealtype
    @Column({type:'int'})
    duration_days:number
    @Column({type:'decimal',precision:10,scale:2})
    price:number
    @OneToMany(()=>subscription,(subsmeal)=>subsmeal.meals)
    subsmeal:subscription[]

}