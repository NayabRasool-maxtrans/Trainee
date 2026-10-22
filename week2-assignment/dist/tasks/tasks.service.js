"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const tasks_entity_1 = require("./entities/tasks.entity");
const typeorm_2 = require("@nestjs/typeorm");
const project_entity_1 = require("../projects/entities/project.entity");
let TasksService = class TasksService {
    taskrepo;
    projectrepo;
    constructor(taskrepo, projectrepo) {
        this.taskrepo = taskrepo;
        this.projectrepo = projectrepo;
    }
    async create(dto) {
        const projectid = await this.projectrepo.findOne({
            where: { id: dto.projectid }
        });
        if (!projectid) {
            throw new common_1.NotFoundException(`project id ${dto.projectid} not found`);
        }
        const task = this.taskrepo.create({
            title: dto.title,
            description: dto.description,
            status: dto.status,
            projectid: dto.projectid,
            projects: projectid
        });
        return this.taskrepo.save(task);
    }
    async getall() {
        const get = await this.taskrepo.find({
            relations: { projects: true }
        });
        return get;
    }
    async getbyid(id) {
        const taskid = await this.taskrepo.findOne({ where: {
                id
            }, relations: { projects: true } });
        if (!taskid) {
            throw new common_1.NotFoundException(`taskid is ${id} not found`);
        }
        return taskid;
    }
    async deletebyid(id) {
        const deleteid = await this.taskrepo.findOne({ where: { id } });
        if (!deleteid) {
            throw new common_1.NotFoundException(`task id is ${id} is not found`);
        }
        return this.taskrepo.remove(deleteid);
    }
    async update(id, updatedto) {
        const taskid = await this.taskrepo.findOne({ where: { id } });
        if (!taskid) {
            throw new common_1.NotFoundException(`task id not found ${id}`);
        }
        if (updatedto.projectid) {
            const projectid = this.projectrepo.findOne({ where: {
                    id: updatedto.projectid
                } });
            if (!projectid) {
                throw new common_1.NotFoundException(`project id ${updatedto.projectid} not found`);
            }
            Object.assign(taskid, updatedto);
            return this.taskrepo.save(taskid);
        }
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(tasks_entity_1.Tasks)),
    __param(1, (0, typeorm_2.InjectRepository)(project_entity_1.Projects)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], TasksService);
//# sourceMappingURL=tasks.service.js.map