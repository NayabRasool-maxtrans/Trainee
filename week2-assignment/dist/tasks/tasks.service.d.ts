import { Repository } from 'typeorm';
import { Tasks } from './entities/tasks.entity';
import { Projects } from '../projects/entities/project.entity';
import { createtasksdto } from './dto/tasks.dto';
import { updatetasksdto } from './dto/updatetasks.dto';
export declare class TasksService {
    private readonly taskrepo;
    private readonly projectrepo;
    constructor(taskrepo: Repository<Tasks>, projectrepo: Repository<Projects>);
    create(dto: createtasksdto): Promise<Tasks>;
    getall(): Promise<Tasks[]>;
    getbyid(id: number): Promise<Tasks>;
    deletebyid(id: number): Promise<Tasks>;
    update(id: number, updatedto: updatetasksdto): Promise<Tasks | undefined>;
}
