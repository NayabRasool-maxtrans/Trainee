import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authserv;
    constructor(authserv: AuthService);
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        message: string;
        login: {
            id: number;
            email: string;
            password: string;
        };
    }>;
}
