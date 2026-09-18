import { Repository } from 'typeorm';
import { mealsplan } from './entity/mealsplanentity';
import { mealdto } from './dto/mealsdto';
import { updatemealsdto } from './dto/mealsupdatedto';
export declare class MealsService {
    private readonly mealsrepository;
    constructor(mealsrepository: Repository<mealsplan>);
    getall(): Promise<mealsplan[]>;
    getbyid(id: number): Promise<mealsplan>;
    Deletebyid(id: number): Promise<string>;
    createmeal(dto: mealdto): Promise<mealsplan>;
    update(id: number, updatedto: updatemealsdto): Promise<mealsplan>;
}
