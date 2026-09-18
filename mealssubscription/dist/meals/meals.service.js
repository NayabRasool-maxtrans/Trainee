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
exports.MealsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const mealsplanentity_1 = require("./entity/mealsplanentity");
const typeorm_2 = require("@nestjs/typeorm");
let MealsService = class MealsService {
    mealsrepository;
    constructor(mealsrepository) {
        this.mealsrepository = mealsrepository;
    }
    async getall() {
        try {
            return await this.mealsrepository.find();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER');
        }
    }
    async getbyid(id) {
        try {
            const mealid = await this.mealsrepository.findOne({ where: { id } });
            if (!mealid) {
                throw new common_1.NotFoundException(`meal id ${id} not exists`);
            }
            return mealid;
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
    async Deletebyid(id) {
        try {
            const deleteid = await this.mealsrepository.findOne({ where: { id } });
            if (!deleteid) {
                throw new common_1.NotFoundException(`meal id ${id} not exists`);
            }
            this.mealsrepository.remove(deleteid);
            return "meal deleted sucessfully..";
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
    async createmeal(dto) {
        try {
            const meal = this.mealsrepository.create(dto);
            return await this.mealsrepository.save(meal);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER');
        }
    }
    async update(id, updatedto) {
        try {
            const mealid = await this.mealsrepository.findOne({ where: { id } });
            if (!mealid) {
                throw new common_1.NotFoundException("meal id not exists..");
            }
            Object.assign(mealid, updatedto);
            return await this.mealsrepository.save(mealid);
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
exports.MealsService = MealsService;
exports.MealsService = MealsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(mealsplanentity_1.mealsplan)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MealsService);
//# sourceMappingURL=meals.service.js.map