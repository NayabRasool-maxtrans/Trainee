import { Repository } from 'typeorm';
import { subscription } from './entity/subscription';
import { users } from '../users/entities/users.entity';
import { subscriptiondto } from './dto/susbdto';
import { mealsplan } from '../meals/entity/mealsplanentity';
import { updatesubscriptiondto } from './dto/updatesubscriptionDto';
export declare class SubscriptionsService {
    private readonly subscriptionrepo;
    private readonly userrepo;
    private readonly mealrepo;
    constructor(subscriptionrepo: Repository<subscription>, userrepo: Repository<users>, mealrepo: Repository<mealsplan>);
    listbyuser(byid: number): Promise<subscription[]>;
    getbyid(id: number): Promise<string | subscription>;
    create(dto: subscriptiondto): Promise<subscription>;
    findall(): Promise<subscription[]>;
    cancel(id: number, dto: updatesubscriptiondto): Promise<string | import("typeorm").UpdateResult>;
}
