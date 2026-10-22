import { Projects } from '../../projects/entities/project.entity';
export declare class Users {
    id: number;
    name: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    projects: Projects[];
}
