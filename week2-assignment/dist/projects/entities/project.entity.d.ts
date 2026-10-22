import { Users } from "../../users/entities/users.entity";
import { Tasks } from "../../tasks/entities/tasks.entity";
export declare class Projects {
    id: number;
    name: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
    user: Users;
    userId: number;
    tasks: Tasks[];
}
