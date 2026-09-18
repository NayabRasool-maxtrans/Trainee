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
    userrepo;
    constructor(userrepo) {
        this.userrepo = userrepo;
        this.userrepo = userrepo;
    }
    async find() {
        try {
            return await this.userrepo.find();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER');
        }
    }
    async findbyid(id) {
        try {
            let findid = await this.userrepo.findOne({ where: { id } });
            if (!findid) {
                throw new common_1.NotFoundException(`user id not ${id} found`);
            }
            return findid;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER');
            }
        }
    }
    async deletebyid(id) {
        try {
            let findid = await this.userrepo.findOne({ where: { id } });
            if (!findid) {
                throw new common_1.NotFoundException(`user id not ${id} found`);
            }
            this.userrepo.remove(findid);
            return `user deleted successfuly..`;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER');
            }
        }
    }
    async createuser(Userdto) {
        try {
            const userdata = this.userrepo.create({
                name: Userdto.name,
                email: Userdto.email,
                phone: Userdto.phone
            });
            return await this.userrepo.save(userdata);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER');
        }
    }
    async update(id, updatedto) {
        try {
            const userid = await this.userrepo.findOne({ where: { id } });
            if (!userid) {
                throw new common_1.NotFoundException("user id not exists..");
            }
            Object.assign(userid, updatedto);
            return await this.userrepo.save(userid);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                throw new common_1.InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER');
            }
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(users_entity_1.users)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map