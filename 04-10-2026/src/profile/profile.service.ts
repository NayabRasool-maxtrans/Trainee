import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { profile } from './Dto/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProfileService {
    constructor(@InjectRepository(profile)private profilerepo:Repository<profile>){}

    getallprofiles(){
        return this.profilerepo.find();
    }
}
