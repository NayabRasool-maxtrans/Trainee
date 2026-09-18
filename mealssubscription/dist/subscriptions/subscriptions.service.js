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
exports.SubscriptionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const subscription_1 = require("./entity/subscription");
const typeorm_2 = require("@nestjs/typeorm");
const users_entity_1 = require("../users/entities/users.entity");
const mealsplanentity_1 = require("../meals/entity/mealsplanentity");
;
let SubscriptionsService = class SubscriptionsService {
    subscriptionrepo;
    userrepo;
    mealrepo;
    constructor(subscriptionrepo, userrepo, mealrepo) {
        this.subscriptionrepo = subscriptionrepo;
        this.userrepo = userrepo;
        this.mealrepo = mealrepo;
    }
    async listbyuser(byid) {
        try {
            const userid = await this.userrepo.exists({ where: { id: byid } });
            if (!userid) {
                throw new common_1.NotFoundException(`userid ${byid}not exists`);
            }
            return this.subscriptionrepo.find({
                where: {
                    user: { id: byid },
                },
                relations: { user: true }
            });
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
    async getbyid(id) {
        try {
            let subid = await this.subscriptionrepo.findOne({ where: { id } });
            if (!subid) {
                throw new common_1.NotFoundException(`given subscription id${id} not exists`);
            }
            return subid;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                return error.message;
            }
            console.log(error);
            throw new common_1.RequestTimeoutException('DB IS NOT CONNECTED TRY AGAIN LATER');
        }
    }
    async create(dto) {
        try {
            const userid = await this.userrepo.findOne({ where: { id: dto.users_id } });
            console.log(userid);
            const mealid = await this.mealrepo.findOne({ where: { id: dto.meals_id } });
            if (!userid) {
                throw new common_1.NotFoundException(`given user_id ${dto.users_id} not exists `);
            }
            if (!mealid) {
                throw new common_1.NotFoundException(`given meal_id ${dto.meals_id} not exists `);
            }
            const exits = await this.subscriptionrepo.findOne({
                where: {
                    user: { id: dto.users_id },
                    meals: { id: dto.meals_id },
                    status: subscription_1.STATUS.ACTIVE
                }
            });
            if (exits) {
                throw new common_1.ConflictException(`user id ${dto.users_id} subscription is active for same mailid ${dto.meals_id}`);
            }
            let user = this.subscriptionrepo.create({
                start_date: dto.start_date,
                end_date: dto.end_date,
                status: dto.status,
                users_id: dto.users_id,
                meals_id: dto.meals_id
            });
            return await this.subscriptionrepo.save(user);
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER');
        }
    }
    async findall() {
        try {
            return await this.subscriptionrepo.find({ relations: { user: true, meals: true } });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER');
        }
    }
    async cancel(id, dto) {
        try {
            const subsid = await this.subscriptionrepo.findOne({ where: { id }, relations: { payment: true } });
            if (!subsid) {
                throw new common_1.NotFoundException(`subsid ${id} not exits`);
            }
            else if (subsid.status !== "ACTIVE") {
                return "subscription active user can be cancel only";
            }
            return this.subscriptionrepo.update(id, dto);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                return error.message;
            }
            console.log(error);
            throw new common_1.RequestTimeoutException('DB IS NOT CONNECTED TRY AGAIN LATER');
        }
    }
};
exports.SubscriptionsService = SubscriptionsService;
exports.SubscriptionsService = SubscriptionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(subscription_1.subscription)),
    __param(1, (0, typeorm_2.InjectRepository)(users_entity_1.users)),
    __param(2, (0, typeorm_2.InjectRepository)(mealsplanentity_1.mealsplan)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], SubscriptionsService);
//# sourceMappingURL=subscriptions.service.js.map