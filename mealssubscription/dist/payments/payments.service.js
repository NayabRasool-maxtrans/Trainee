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
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const paymentsentity_1 = require("./entity/paymentsentity");
const typeorm_2 = require("@nestjs/typeorm");
const subscription_1 = require("../subscriptions/entity/subscription");
let PaymentsService = class PaymentsService {
    paymentrepo;
    subsrepo;
    constructor(paymentrepo, subsrepo) {
        this.paymentrepo = paymentrepo;
        this.subsrepo = subsrepo;
    }
    async create(dto) {
        try {
            const subscription = await this.subsrepo.findOne({
                where: {
                    id: dto.subscription_id,
                },
                relations: {
                    meals: true,
                }
            });
            console.log(subscription);
            if (!subscription) {
                throw new common_1.NotFoundException(`subscription not found `);
            }
            console.log("price", subscription.meals.price);
            console.log(subscription);
            const pay = this.paymentrepo.create({
                amount: subscription.meals.price,
                status: dto.status,
                subscription_id: subscription.id
            });
            return await this.paymentrepo.save(pay);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            else {
                console.log("error is", error);
                throw new common_1.InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER');
            }
        }
    }
    async getall() {
        try {
            const meal = await this.paymentrepo.find({ relations: { subs: true } });
            return await this.paymentrepo.find({ relations: { subs: true } });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('DB IS NOT CONNECTED TRY AGAIN LATER');
        }
    }
    async listbysubscription(id) {
        try {
            const subid = await this.subsrepo.findOne({ where: { id: id } });
            if (!subid) {
                throw new common_1.NotFoundException(`subscriptionid ${id}not exists`);
            }
            return this.paymentrepo.find({ where: { subscription_id: id }, relations: { subs: true } });
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
    async refundamount(id, dto) {
        try {
            const paymentid = await this.paymentrepo.findOne({ where: { id: id, status: paymentsentity_1.PAYMENTSTATUS.SUCCESS },
                relations: { subs: true } });
            if (!paymentid) {
                throw new common_1.ConflictException(`paymentid ${id} not exists..`);
            }
            if (!paymentid.subscription_id) {
                throw new common_1.NotFoundException(`subscriptionid ${paymentid.subscription_id} not exists..`);
            }
            const subscriptionid = await this.subsrepo.findOne({ where: { id: paymentid.subscription_id }, relations: { meals: true } });
            const today = new Date();
            const startingdate = new Date(paymentid.subs.start_date);
            const difference = today.getTime() - startingdate.getTime();
            const D = Math.floor(difference / (1000 * 60 * 60 * 24));
            const N = paymentid.subs.meals.duration_days;
            console.log("total days", D);
            const price = paymentid.subs.meals.price;
            console.log(price);
            const refund = price * (N - D) / N;
            console.log(refund);
            return this.paymentrepo.update(paymentid.id, {
                status: paymentsentity_1.PAYMENTSTATUS.REFUND,
                subscription_id: paymentid.subscription_id,
                amount: Number(refund.toFixed(2))
            });
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            else {
                console.log("error is", error);
                throw new common_1.InternalServerErrorException('db is not connected');
            }
        }
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(paymentsentity_1.payments)),
    __param(1, (0, typeorm_2.InjectRepository)(subscription_1.subscription)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map