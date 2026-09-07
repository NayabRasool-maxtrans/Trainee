import { IsEmail, isNotEmpty, IsNotEmpty, IsNumber, isNumber, IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { profile } from "../profile/Dto/profile.entity";



@Entity()
export class user{
    @Column()
    @PrimaryGeneratedColumn()
    id:number;
   @Column({nullable:false})
    name:string;
    @Column({unique:true,nullable:false })
    email:string;
    @Column({nullable:false})
    password:string;
    @CreateDateColumn()
    created_at:Date;
    @OneToOne(()=>profile,{cascade:true,nullable:true,eager:true}) //here profile is foreign key refer to the id from profile  table
    @JoinColumn()
    Profile?:profile |null
}
