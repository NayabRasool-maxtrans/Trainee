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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const project_entity_1 = require("./entities/project.entity");
const typeorm_2 = require("@nestjs/typeorm");
const users_entity_1 = require("../users/entities/users.entity");
let ProjectsService = class ProjectsService {
    projectrepo;
    userrepo;
    constructor(projectrepo, userrepo) {
        this.projectrepo = projectrepo;
        this.userrepo = userrepo;
    }
    async create(createdto) {
        let user = await this.userrepo.findOne({
            where: { id: createdto.userId }
        });
        if (!user) {
            throw new common_1.NotFoundException(`user with id ${createdto.userId} not found`);
        }
        const project = this.projectrepo.create({
            name: createdto.name,
            description: createdto.description,
            userId: createdto.userId
        });
        return this.projectrepo.save(project);
    }
    async findall() {
        return await this.projectrepo.find({ relations: { user: true, tasks: true }
        });
    }
    async getbyid(id) {
        const project = await this.projectrepo.findOne({
            where: { id },
            relations: { user: true }
        });
        if (!project) {
            throw new common_1.NotFoundException(`project id is ${id} not found`);
        }
        return project;
    }
    async update(id, updateprojectdto) {
        const projectid = await this.projectrepo.find({
            where: { id }
        });
        if (!projectid) {
            throw new common_1.NotFoundException(`project id not found ${id}`);
        }
        if (updateprojectdto.userId) {
            const user = this.userrepo.findOne({
                where: {
                    id: updateprojectdto.userId
                }
            });
            if (!user) {
                throw new common_1.NotFoundException(`user with id ${updateprojectdto.userId}`);
            }
            Object.assign(projectid, updateprojectdto);
        }
        return await this.projectrepo.save(projectid);
    }
    async remove(id) {
        const remove = await this.projectrepo.find({ where: { id } });
        if (!remove) {
            throw new common_1.NotFoundException(`project id ${id} is not found..`);
        }
        this.projectrepo.remove(remove);
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(project_entity_1.Projects)),
    __param(1, (0, typeorm_2.InjectRepository)(users_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map