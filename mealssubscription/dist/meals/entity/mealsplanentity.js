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
exports.mealsplan = void 0;
const typeorm_1 = require("typeorm");
const subscription_1 = require("../../subscriptions/entity/subscription");
var mealtype;
(function (mealtype) {
    mealtype["VEG"] = "VEG";
    mealtype["NONVEG"] = "NONVEG";
    mealtype["VEGAN"] = "VEGAN";
})(mealtype || (mealtype = {}));
let mealsplan = class mealsplan {
    id;
    name;
    meal_type;
    duration_days;
    price;
    subsmeal;
};
exports.mealsplan = mealsplan;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], mealsplan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], mealsplan.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: mealtype }),
    __metadata("design:type", String)
], mealsplan.prototype, "meal_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], mealsplan.prototype, "duration_days", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], mealsplan.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => subscription_1.subscription, (subsmeal) => subsmeal.meals),
    __metadata("design:type", Array)
], mealsplan.prototype, "subsmeal", void 0);
exports.mealsplan = mealsplan = __decorate([
    (0, typeorm_1.Entity)()
], mealsplan);
//# sourceMappingURL=mealsplanentity.js.map