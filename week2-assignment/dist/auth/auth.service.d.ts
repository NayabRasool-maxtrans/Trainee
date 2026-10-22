import { Repository } from 'typeorm';
import { Users } from '../users/entities/users.entity';
export declare class AuthService {
    private readonly authorepo;
    constructor(authorepo: Repository<Users>);
    login(email: string, password: string): Promise<{
        message: string;
        login: {
            id: number;
            email: string;
            password: string;
        };
    }>;
}
