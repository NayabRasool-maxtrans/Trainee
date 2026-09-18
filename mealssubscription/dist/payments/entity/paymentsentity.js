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
Object.defineProperty(exports, "__esModule", { value: true });
exports.payments = exports.PAYMENTSTATUS = void 0;
const typeorm_1 = require("typeorm");
const subscription_1 = require("../../subscriptions/entity/subscription");
var PAYMENTSTATUS;
(function (PAYMENTSTATUS) {
    PAYMENTSTATUS["PENDING"] = "PENDING";
    PAYMENTSTATUS["SUCCESS"] = "SUCCESS";
    PAYMENTSTATUS["FAILED"] = "FAILED";
    PAYMENTSTATUS["REFUND"] = "REFUND";
})(PAYMENTSTATUS || (exports.PAYMENTSTATUS = PAYMENTSTATUS = {}));
let payments = class payments {
    id;
    amount;
    status;
    subscription_id;
    subs;
};
exports.payments = payments;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], payments.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], payments.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum',
        enum: PAYMENTSTATUS,
        default: PAYMENTSTATUS.PENDING
    }),
    __metadata("design:type", String)
], payments.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'subscription_id', type: 'int' }),
    __metadata("design:type", Number)
], payments.prototype, "subscription_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subscription_1.subscription, (subs) => subs.payment),
    (0, typeorm_1.JoinColumn)({ name: 'subscription_id' }),
    __metadata("design:type", subscription_1.subscription)
], payments.prototype, "subs", void 0);
exports.payments = payments = __decorate([
    (0, typeorm_1.Entity)()
], payments);
//# sourceMappingURL=paymentsentity.js.map