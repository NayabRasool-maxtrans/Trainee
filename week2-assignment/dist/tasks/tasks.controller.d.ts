import { TasksService } from './tasks.service';
import { createtasksdto } from './dto/tasks.dto';
import { updatetasksdto } from './dto/updatetasks.dto';
export declare class TasksController {
    private readonly tasksservice;
    constructor(tasksservice: TasksService);
    create(create: createtasksdto): Promise<import("./entities/tasks.entity").Tasks>;
    findall(): Promise<import("./entities/tasks.entity").Tasks[]>;
    findbyid(id: number): Promise<import("./entities/tasks.entity").Tasks>;
    deletebyid(id: number): void;
    updatebyid(id: number, dto: updatetasksdto): Promise<import("./entities/tasks.entity").Tasks | undefined>;
}
