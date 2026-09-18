import { ConflictException, HttpException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { payments, PAYMENTSTATUS } from './entity/paymentsentity';
import { InjectRepository } from '@nestjs/typeorm';
import { paymentdto } from './dto/paymentdto';
import { STATUS, subscription } from '../subscriptions/entity/subscription';
import { upadetPaymentDto } from './dto/paymentupdate';
import { Console } from 'console';

@Injectable()
export class PaymentsService {

    constructor(@InjectRepository(payments)private readonly paymentrepo:Repository<payments>,
         @InjectRepository(subscription)private readonly subsrepo:Repository<subscription>){}

    async create(dto: paymentdto) {
        try {
            const subscription =await this.subsrepo.findOne({
                where: {
                    id:dto.subscription_id, 
                },
                relations:{
                    meals:true,
                }
            })

    
            console.log(subscription);
            if (!subscription) {
                throw new NotFoundException(`subscription not found `)
            }
            console.log("price",subscription.meals.price)
            console.log(subscription)
            const pay = this.paymentrepo.create({
                amount:subscription.meals.price,
                status: dto.status,
                subscription_id:subscription.id

            })
            return await this.paymentrepo.save(pay)

        }
        catch (error) {
            if (error instanceof NotFoundException) {
                throw error
            }
            else{
                console.log("error is",error)
                
                throw new InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER')
            }
            

        }



    }

    //get all payements
    async getall() {
        try{
             const meal=await this.paymentrepo.find({relations:{subs:true}});
        return await this.paymentrepo.find({relations:{subs:true}});

        }
        catch(error){
            throw new InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER')
        }
       

    }


    //list by subscription

   async listbysubscription(id:number){
    try{
        const subid=await this.subsrepo.findOne({where:{id:id}})
    if(!subid){
        throw new NotFoundException(`subscriptionid ${id}not exists`)
    }

    return this.paymentrepo.find({where:{subscription_id:id},relations:{subs:true}})


    }
    catch(error){
        if(error instanceof NotFoundException){
            throw error
        }
        else{
            throw new InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER')

        }

    }
    
    }


    //refund amount
    async refundamount(id:number,dto:upadetPaymentDto){
        try{
            const paymentid=await this.paymentrepo.findOne({where:{id:id,status:PAYMENTSTATUS.SUCCESS},
        relations:{subs:true}});
       if(!paymentid){
         throw new ConflictException(`paymentid ${id} not exists..`)
       }
       
       if(!paymentid.subscription_id ){
         throw new NotFoundException(`subscriptionid ${paymentid.subscription_id} not exists..`)

       }
       const subscriptionid=await this.subsrepo.findOne({where:{id:paymentid.subscription_id},relations:{meals:true}})
       
       const today=new Date();
       const startingdate=new Date(paymentid.subs.start_date)
       const difference=today.getTime()-startingdate.getTime()
       const D=Math.floor(difference/(1000*60*60*24))
       const N=paymentid.subs.meals.duration_days
       console.log("total days",D)
       const price=paymentid.subs.meals.price
       console.log(price)
       const refund=price*(N-D)/N
       console.log(refund)
       
       /*
       //todaydate
       const today=new Date();
     //starting date
       const startingdate=new Date(subsid.)
      
       const difference = today.getTime()-startingdate.getTime()
        const  days=Math.floor(difference/(1000*60*60*24));
        const amount=subsid.meals.price;
        const totaldays=subsid.meals.duration_days
        const dailyamount=amount/totaldays;
        const refund=dailyamount*totaldays */
       return this.paymentrepo.update(paymentid.id,{
            status:PAYMENTSTATUS.REFUND,
            subscription_id:paymentid.subscription_id,
            amount:Number(refund.toFixed(2))    
        })


        }catch(error){
            if(error instanceof HttpException){
                throw error
            }
            else{
                console.log("error is",error)
                throw new InternalServerErrorException('db is not connected')
            }
           
        }
       
    }
}
