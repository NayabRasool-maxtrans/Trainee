import { MealsService } from './meals.service';
import { mealdto } from './dto/mealsdto';
import { updatemealsdto } from './dto/mealsupdatedto';
export declare class MealsController {
    private readonly mealsservice;
    constructor(mealsservice: MealsService);
    getall(): Promise<import("./entity/mealsplanentity").mealsplan[]>;
    getbyid(id: number): Promise<import("./entity/mealsplanentity").mealsplan>;
    deletebyid(id: number): Promise<string>;
    createmeal(dto: mealdto): Promise<import("./entity/mealsplanentity").mealsplan>;
    updatemeal(id: number, dto: updatemealsdto): Promise<import("./entity/mealsplanentity").mealsplan>;
}
