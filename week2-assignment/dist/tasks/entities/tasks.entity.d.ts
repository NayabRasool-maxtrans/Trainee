import { Projects } from "../../projects/entities/project.entity";
export declare enum TaskStatus {
    TODO = "TODO",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE"
}
export declare class Tasks {
    id: number;
    title: string;
    description?: string;
    status: TaskStatus;
    created_at: Date;
    updated_at: Date;
    projects: Projects;
    projectid: number;
}
