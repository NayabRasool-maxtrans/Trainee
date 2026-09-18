
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { users } from "../../users/entities/users.entity";
import { mealsplan } from "../../meals/entity/mealsplanentity";
import { payments } from "../../payments/entity/paymentsentity";


export enum STATUS{
    ACTIVE="ACTIVE",
    CANCELLED="CANCELLED",
    COMPLETED="COMPLETED"
}
@Entity()
export class subscription{
    
    @PrimaryGeneratedColumn()
    id:number
    @Column({type:'date'})
    start_date:Date
    @Column({type:'date'})
    end_date:Date
    @Column({type:'enum',
        enum:STATUS
    })
    status:STATUS
    @Column({type:'int',name:'users_id'})
    users_id:number
    @Column({type:'int',name:'meals_id'})
    meals_id:number
    @ManyToOne(()=>users,(sub)=>sub.subs)
    @JoinColumn({name:'users_id'})
    user:users
    @ManyToOne(()=>mealsplan,(meal)=>meal.subsmeal)
    @JoinColumn({name:'meals_id'}) 
    meals:mealsplan

    @OneToMany(()=>payments,(payment)=>payment.subs)
    payment:payments[]
   
}