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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./entities/users.entity");
const typeorm_2 = require("@nestjs/typeorm");
let UsersService = class UsersService {
    userrepository;
    constructor(userrepository) {
        this.userrepository = userrepository;
    }
    async create(createuser) {
        const existingemailid = await this.userrepository.findOne({
            where: {
                email: createuser.email
            }
        });
        if (existingemailid) {
            throw new common_1.ConflictException('Email id Already Exists..');
        }
        const user = this.userrepository.create({
            name: createuser.name,
            email: createuser.email,
            password: createuser.password
        });
        return this.userrepository.save(user);
    }
    async getall() {
        return this.userrepository.find({ relations: { projects: true } });
    }
    async findone(id) {
        let userid = await this.userrepository.findOne({
            where: { id }
        });
        if (!userid) {
            throw new common_1.NotFoundException(`user id ${id} not exists`);
        }
        return userid;
    }
    async findemail(email) {
        let emailid = await this.userrepository.findOne({ where: { email } });
        return emailid;
    }
    async updateuser(updatedto, id) {
        const existid = await this.userrepository.findOne({ where: { id } });
        if (!existid) {
            throw new common_1.NotFoundException(`USER id ${id} not found`);
        }
        if (updatedto.email && updatedto.email !== existid.email) {
            const existingemailid = await this.userrepository.findOne({ where: { email: updatedto.email } });
            if (existingemailid) {
                throw new common_1.ConflictException(`emailid already exists`);
            }
        }
        Object.assign(existid, updatedto);
        return this.userrepository.save(existid);
    }
    async deletebyid(id) {
        const existing = await this.userrepository.findOne({ where: { id } });
        if (!existing) {
            throw new common_1.NotFoundException(`user id not exists ${id}`);
        }
        await this.userrepository.remove(existing);
        return `user deleted sucessfully ${existing}`;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(users_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map