import { Column, Entity, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { subscription } from "../../subscriptions/entity/subscription";
@Entity()
export class users{
    
    @PrimaryGeneratedColumn()
    id:number
    @Column({type:'varchar',length:150})
    name:string
    @Column({type:'varchar',length:150,unique:true})
    email:string
    @Column({type:'varchar',length:20})
    phone:number
    @OneToMany(()=>subscription,(user)=>user.user)
    subs:subscription[]

}