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
exports.subscription = exports.STATUS = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../../users/entities/users.entity");
const mealsplanentity_1 = require("../../meals/entity/mealsplanentity");
const paymentsentity_1 = require("../../payments/entity/paymentsentity");
var STATUS;
(function (STATUS) {
    STATUS["ACTIVE"] = "ACTIVE";
    STATUS["CANCELLED"] = "CANCELLED";
    STATUS["COMPLETED"] = "COMPLETED";
})(STATUS || (exports.STATUS = STATUS = {}));
let subscription = class subscription {
    id;
    start_date;
    end_date;
    status;
    users_id;
    meals_id;
    user;
    meals;
    payment;
};
exports.subscription = subscription;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], subscription.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], subscription.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], subscription.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum',
        enum: STATUS
    }),
    __metadata("design:type", String)
], subscription.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'users_id' }),
    __metadata("design:type", Number)
], subscription.prototype, "users_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'meals_id' }),
    __metadata("design:type", Number)
], subscription.prototype, "meals_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.users, (sub) => sub.subs),
    (0, typeorm_1.JoinColumn)({ name: 'users_id' }),
    __metadata("design:type", users_entity_1.users)
], subscription.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => mealsplanentity_1.mealsplan, (meal) => meal.subsmeal),
    (0, typeorm_1.JoinColumn)({ name: 'meals_id' }),
    __metadata("design:type", mealsplanentity_1.mealsplan)
], subscription.prototype, "meals", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => paymentsentity_1.payments, (payment) => payment.subs),
    __metadata("design:type", Array)
], subscription.prototype, "payment", void 0);
exports.subscription = subscription = __decorate([
    (0, typeorm_1.Entity)()
], subscription);
//# sourceMappingURL=subscription.js.map