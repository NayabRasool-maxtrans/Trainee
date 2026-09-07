import { ProjectsService } from './projects.service';
import { projectsdto } from './dto/projects.dto';
import { updateprojectsdto } from './dto/upadte.dto';
export declare class ProjectsController {
    private readonly projectservice;
    constructor(projectservice: ProjectsService);
    newuser(project: projectsdto): Promise<import("./entities/project.entity").Projects>;
    getall(): Promise<import("./entities/project.entity").Projects[]>;
    getbyid(id: number): Promise<import("./entities/project.entity").Projects>;
    updateproject(id: number, dto: updateprojectsdto): Promise<import("./entities/project.entity").Projects[]>;
    deletebyid(id: number): string;
}
