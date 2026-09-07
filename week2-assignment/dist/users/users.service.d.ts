import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';
import { usersdto } from './dto/users.dto';
import { updateusersdto } from './dto/update.userdto';
export declare class UsersService {
    private readonly userrepository;
    constructor(userrepository: Repository<Users>);
    create(createuser: usersdto): Promise<Users>;
    getall(): Promise<Users[]>;
    findone(id: number): Promise<Users>;
    findemail(email: string): Promise<Users | null>;
    updateuser(updatedto: updateusersdto, id: number): Promise<Users>;
    deletebyid(id: number): Promise<string>;
}
