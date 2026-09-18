import { Repository } from 'typeorm';
import { users } from './entities/users.entity';
import { usersdto } from './usersdto/users.dto';
import { updateusersdto } from './usersdto/updateusers.dto';
export declare class UsersService {
    private readonly userrepo;
    constructor(userrepo: Repository<users>);
    find(): Promise<users[]>;
    findbyid(id: number): Promise<users>;
    deletebyid(id: number): Promise<string>;
    createuser(Userdto: usersdto): Promise<users>;
    update(id: number, updatedto: updateusersdto): Promise<users>;
}
