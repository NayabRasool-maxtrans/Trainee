import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { user } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { userdto } from './dtos/user.dto';
import { profile } from '../profile/Dto/profile.entity';


@Injectable()
export class UsersService {

    constructor(@InjectRepository(user) private userrepository:Repository<user>,
@InjectRepository(profile) private profilerepo:Repository<profile>){

    }
    
    getall(){
        return this.userrepository.find({
           /* relations:{
                Profile:true    //here fetching the user and profiles details both 
                                // this is called eager loading
            }*/
        });
    }
    public async createuser(userdto:userdto){
        //create profile and save   
        userdto.Profile=userdto.Profile ?? {}
        //we dont need write this explicitly by using casecade contains some operations like
        //insert ,romve,update like that in user table we add cascade['insert']
       let profile= this.profilerepo.create(userdto.Profile)
       await this.profilerepo.save(profile)

       //create user object
       let user=this.userrepository.create(userdto)
       let emailid=await this.userrepository.findOne({
        where:{
            email:userdto.email
        }
       })
       if(emailid){
        return new NotFoundException("email id already exits");

       }
       //set the profile object
       user.Profile=profile
       //save the user object
      return await this.userrepository.save(user)

    }

    //delete by id
   public async deletedbyid(id:number){
    
    
        //find user id 
       let userid= await this.userrepository.findOneBy({id})
       if(!userid){
        throw new NotFoundException({message:`user id ${id} not found`})
       }
       //delete the rofile
      if(userid?.Profile){
        await this.profilerepo.delete(userid.Profile.id)
      }
      //delete user
       
       await this.userrepository.delete(id);
      return {
        message:"user deleted sucessfully..."
      }


    }
    /*
    async create(dto:userdto){
        //find email exists or not 
        const user=await this.userrepository.findOne({
           where:{email:dto.email}
        })
        //if email exits give the error
        if(user){
            return 'the user with given email id already exists';
            
        }
        //create user
        let newuser=this.userrepository.create(dto);
        //save the user
        newuser= await this.userrepository.save(newuser)
        return newuser;
        
    }
   //relationship one to one 
    //update
    async update(user:userdto,id:number){
        let updateuser=await this.userrepository.findOne({
            where:{id}
        })
        if(!updateuser){
            throw new NotFoundException('user id not found..');
        }
        Object.assign(updateuser,user)
        return  this.userrepository.save(updateuser);
    }

    //delete by id
    async delete(id:number){
        let deleteid=await this.userrepository.findOne({
            where:{id}
        })
        if(!deleteid){
            throw new NotFoundException("user id is not found...")
        }
        await this.userrepository.remove(deleteid);
        return {message:"user deleted sucessfuly",deleteid}
    }

    //find by id

    async getbyid(id:number){
        let userid=await this.userrepository.findOne({
            where:{id}
        })
        if(!userid){
            throw new NotFoundException(`User with Id ${id} not found `)
        }
        return userid;

    }
    


*/



}