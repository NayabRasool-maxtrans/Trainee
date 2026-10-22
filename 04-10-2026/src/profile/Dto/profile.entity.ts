import { timestamp } from "rxjs"
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { user } from "../../users/user.entity"
@Entity()
export class profile{
    @PrimaryGeneratedColumn()
    id:number
    @Column({nullable:true})
    name:string
    @Column({nullable:true,unique:true})
    email:string
    @Column({nullable:true})
    password:string
    @Column({type:'date',nullable:true})
    dob?:Date
    @Column({type:'text',nullable:true})
    bio:string
    


}