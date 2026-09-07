import { TaskStatus } from "../entities/tasks.entity";
export declare class createtasksdto {
    title: string;
    description?: string;
    status?: TaskStatus;
    projectid: number;
}
