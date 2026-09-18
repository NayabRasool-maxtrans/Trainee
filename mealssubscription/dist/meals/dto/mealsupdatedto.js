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
exports.updatemealsdto = void 0;
const class_validator_1 = require("class-validator");
var mealtype;
(function (mealtype) {
    mealtype["VEG"] = "VEG";
    mealtype["NON_VEG"] = "NON_VEG";
    mealtype["VEGAN"] = "VEGAN";
})(mealtype || (mealtype = {}));
class updatemealsdto {
    name;
    meal_type;
    duration_days;
    price;
}
exports.updatemealsdto = updatemealsdto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], updatemealsdto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(mealtype),
    __metadata("design:type", String)
], updatemealsdto.prototype, "meal_type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Number)
], updatemealsdto.prototype, "duration_days", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], updatemealsdto.prototype, "price", void 0);
//# sourceMappingURL=mealsupdatedto.js.map