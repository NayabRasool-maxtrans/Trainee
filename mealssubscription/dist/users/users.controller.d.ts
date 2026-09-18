import { UsersService } from './users.service';
import { usersdto } from './usersdto/users.dto';
import { updateusersdto } from './usersdto/updateusers.dto';
export declare class UsersController {
    private readonly userservice;
    constructor(userservice: UsersService);
    getall(): Promise<import("./entities/users.entity").users[]>;
    getbyid(id: number): Promise<import("./entities/users.entity").users>;
    deletbyid(id: number): Promise<string>;
    newuser(data: usersdto): Promise<import("./entities/users.entity").users>;
    update(id: number, updatedto: updateusersdto): Promise<import("./entities/users.entity").users>;
}
