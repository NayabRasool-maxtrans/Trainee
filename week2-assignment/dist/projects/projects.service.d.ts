import { Repository } from 'typeorm';
import { Projects } from './entities/project.entity';
import { Users } from '../users/entities/users.entity';
import { projectsdto } from './dto/projects.dto';
import { updateprojectsdto } from './dto/upadte.dto';
export declare class ProjectsService {
    private readonly projectrepo;
    private readonly userrepo;
    constructor(projectrepo: Repository<Projects>, userrepo: Repository<Users>);
    create(createdto: projectsdto): Promise<Projects>;
    findall(): Promise<Projects[]>;
    getbyid(id: number): Promise<Projects>;
    update(id: number, updateprojectdto: updateprojectsdto): Promise<Projects[]>;
    remove(id: number): Promise<void>;
}
