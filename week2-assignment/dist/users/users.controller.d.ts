import { UsersService } from './users.service';
import { usersdto } from './dto/users.dto';
import { updateusersdto } from './dto/update.userdto';
export declare class UsersController {
    private readonly userservice;
    constructor(userservice: UsersService);
    getall(): Promise<import("./entities/users.entity").Users[]>;
    getbyid(id: number): Promise<import("./entities/users.entity").Users>;
    getbyemail(email: string): Promise<import("./entities/users.entity").Users | null>;
    newuser(body: usersdto): Promise<import("./entities/users.entity").Users>;
    updateuser(update: updateusersdto, id: number): Promise<import("./entities/users.entity").Users>;
    Deleteid(id: number): Promise<string>;
}
