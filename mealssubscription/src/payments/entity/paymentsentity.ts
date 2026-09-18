import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { subscription } from "../../subscriptions/entity/subscription";
export enum PAYMENTSTATUS{
    PENDING='PENDING',
    SUCCESS='SUCCESS',
    FAILED='FAILED',
    REFUND='REFUND'

}

@Entity()
export class payments{
    @PrimaryGeneratedColumn()
    id:number
    @Column('decimal',{precision:10,scale:2})
    amount:number
    @Column({type:'enum',
        enum:PAYMENTSTATUS,
        default:PAYMENTSTATUS.PENDING
    })
    status:PAYMENTSTATUS
    @Column({name:'subscription_id',type:'int'})
    subscription_id:number
    @ManyToOne(()=>subscription,(subs)=>subs.payment)
    @JoinColumn({name:'subscription_id'})
    subs:subscription



}