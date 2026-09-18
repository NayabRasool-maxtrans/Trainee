import { Injectable, InternalServerErrorException, NotFoundException, RequestTimeoutException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { users } from './entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { usersdto } from './usersdto/users.dto';
import { updateusersdto } from './usersdto/updateusers.dto';
import { emit } from 'process';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(users) private readonly userrepo: Repository<users>) {
        this.userrepo = userrepo;
    }


    //get all users
    async find() {
        try {
            return await this.userrepo.find()
        }
        catch (error) {
            throw new InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER')
        }


    }



    //get users by id

    async findbyid(id: number) {
        try {
            let findid = await this.userrepo.findOne({ where: { id } })
            if (!findid) {
                throw new NotFoundException(`user id not ${id} found`)
            }
            return findid;


        }
        catch (error) {
            if (error instanceof NotFoundException) {
                throw error
            }
            else {
                throw new InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER')

            }


        }

    }



    //delete by id
    async deletebyid(id: number) {
        try {
            let findid = await this.userrepo.findOne({ where: { id } })
            if (!findid) {
                throw new NotFoundException(`user id not ${id} found`)
            }
            this.userrepo.remove(findid);
            return `user deleted successfuly..`

        }
        catch (error) {
            if (error instanceof NotFoundException) {
                throw error
            }
            else {
                throw new InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER')


            }

        }


    }


    //create user 
    async createuser(Userdto: usersdto) {
        try {
            const userdata = this.userrepo.create({
                name: Userdto.name,
                email: Userdto.email,
                phone: Userdto.phone

            })

            return await this.userrepo.save(userdata)


        }
        catch (error) {
            throw new InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER')

        }


    }


    //update by id
    async update(id: number, updatedto: updateusersdto) {
        try {
            const userid =await this.userrepo.findOne({ where: { id } })
            if (!userid) {
                throw new NotFoundException("user id not exists..")

            } 
            Object.assign(userid, updatedto)
        return await this.userrepo.save(userid);

        }
        catch(error) {
            if (error instanceof NotFoundException) {
                throw error
            }
            else {
                throw new InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER')

            }

        }



    }




}
