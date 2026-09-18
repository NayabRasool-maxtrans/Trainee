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
exports.MealsController = void 0;
const common_1 = require("@nestjs/common");
const meals_service_1 = require("./meals.service");
const mealsdto_1 = require("./dto/mealsdto");
const mealsupdatedto_1 = require("./dto/mealsupdatedto");
let MealsController = class MealsController {
    mealsservice;
    constructor(mealsservice) {
        this.mealsservice = mealsservice;
    }
    getall() {
        return this.mealsservice.getall();
    }
    getbyid(id) {
        return this.mealsservice.getbyid(id);
    }
    deletebyid(id) {
        return this.mealsservice.Deletebyid(id);
    }
    createmeal(dto) {
        return this.mealsservice.createmeal(dto);
    }
    updatemeal(id, dto) {
        return this.mealsservice.update(id, dto);
    }
};
exports.MealsController = MealsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MealsController.prototype, "getall", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MealsController.prototype, "getbyid", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MealsController.prototype, "deletebyid", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mealsdto_1.mealdto]),
    __metadata("design:returntype", void 0)
], MealsController.prototype, "createmeal", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, mealsupdatedto_1.updatemealsdto]),
    __metadata("design:returntype", void 0)
], MealsController.prototype, "updatemeal", null);
exports.MealsController = MealsController = __decorate([
    (0, common_1.Controller)('meals'),
    __param(0, (0, common_1.Inject)()),
    __metadata("design:paramtypes", [meals_service_1.MealsService])
], MealsController);
//# sourceMappingURL=meals.controller.js.map