import { ConflictException, HttpException, Injectable, InternalServerErrorException, NotFoundException, RequestTimeoutException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { STATUS, subscription } from './entity/subscription';
import { InjectRepository } from '@nestjs/typeorm';
import { users } from '../users/entities/users.entity';
import { subscriptiondto } from './dto/susbdto';
import { mealsplan } from '../meals/entity/mealsplanentity';
import { updatesubscriptiondto } from './dto/updatesubscriptionDto';
;

@Injectable()
export class SubscriptionsService {
    constructor(@InjectRepository(subscription) private readonly subscriptionrepo: Repository<subscription>,
        @InjectRepository(users) private readonly userrepo: Repository<users>,
        @InjectRepository(mealsplan) private readonly mealrepo: Repository<mealsplan>) { }

    //get all subs

    async listbyuser(byid: number) {
        try {
            const userid = await this.userrepo.exists({where:{id:byid}})

            if (!userid) {
                throw new NotFoundException(`userid ${byid}not exists`)

            }
            return  this.subscriptionrepo.find({
                where: {
                    user:{id:byid},
                },
                relations:{user:true}
            }
            )

        }
        catch (error) {
            if (error instanceof NotFoundException) {
                throw error
            }
            else{

                throw new InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER')

            }
            
        }


    }
    async getbyid(id: number) {
        try {
            let subid = await this.subscriptionrepo.findOne({ where: { id } })
            if (!subid) {
                throw new NotFoundException(`given subscription id${id} not exists`)
            }
            return subid;

        } 
        catch (error) {
            if (error instanceof NotFoundException) {
                return error.message
            }
            console.log(error)
            throw new RequestTimeoutException('DB IS NOT CONNECTED TRY AGAIN LATER')


        }

    }
    //createsubs
    async create(dto: subscriptiondto) {

        try{
             //user id exists or not check 
        const userid = await this.userrepo.findOne({ where: { id: dto.users_id } })
        console.log(userid)
        //meal id exists or not check if not throw the error
        const mealid = await this.mealrepo.findOne({ where: { id: dto.meals_id } })
        if (!userid) {
            throw new NotFoundException(`given user_id ${dto.users_id} not exists `)
        }
        if (!mealid) {
            throw new NotFoundException(`given meal_id ${dto.meals_id} not exists `)
        }
        //if userid subscription is active or not checking if not active then create subscription for userid
       const exits=await this.subscriptionrepo.findOne({
            where:{
               user:{id:dto.users_id},
               meals:{id:dto.meals_id},
               status:STATUS.ACTIVE
            }
            
        })
        //if user is already active then throw the error
        if(exits){
            throw new ConflictException(`user id ${dto.users_id} subscription is active for same mailid ${dto.meals_id}`)

        }
        let user = this.subscriptionrepo.create({
            start_date: dto.start_date,
            end_date: dto.end_date,
            status: dto.status,
            users_id:dto.users_id,
            meals_id:dto.meals_id
        })
        return await this.subscriptionrepo.save(user)

        }
        catch(error){
            //here httpexeception handle 404 and 409 exceptions
            if (error instanceof HttpException){
                throw error
            }
            throw new InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER')

        }
       
    }


    //getall

    async findall(){
        try{
            return await this.subscriptionrepo.find({relations:{user:true,meals:true}});

        }
        catch(error){
            throw new InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER')

        }

        
    }


    //check status

    async cancel(id:number,dto:updatesubscriptiondto){
       try{
         const subsid=await this.subscriptionrepo.findOne({where:{id},relations:{payment:true} })
       if(!subsid){
        throw new NotFoundException(`subsid ${id} not exits`)
       }  
       else if(subsid.status!=="ACTIVE"){
          
          return "subscription active user can be cancel only"

       }
       /*
       //todaydate
       const today=new Date();
     //starting date
       const startingdate=new Date(subsid.start_date)
      
       const difference = today.getTime()-startingdate.getTime()
        const  days=Math.floor(difference/(1000*60*60*24));
        const amount=subsid.meals.price;
        const totaldays=subsid.meals.duration_days
        const dailyamount=amount/totaldays;
        const refund=dailyamount*totaldays */
       
      return this.subscriptionrepo.update(id,dto)   
         

       }
       catch(error){
        if (error instanceof NotFoundException) {
                return error.message
            }
            console.log(error)
            throw new RequestTimeoutException('DB IS NOT CONNECTED TRY AGAIN LATER')


       }
      
        


    }




}




