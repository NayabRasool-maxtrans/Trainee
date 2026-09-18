import { SubscriptionsService } from './subscriptions.service';
import { subscriptiondto } from './dto/susbdto';
import { updatesubscriptiondto } from './dto/updatesubscriptionDto';
export declare class SubscriptionsController {
    private readonly subservice;
    constructor(subservice: SubscriptionsService);
    get(id: number): Promise<import("./entity/subscription").subscription[]>;
    create(dto: subscriptiondto): Promise<import("./entity/subscription").subscription>;
    getbyid(id: number): Promise<string | import("./entity/subscription").subscription>;
    getall(): Promise<import("./entity/subscription").subscription[]>;
    cancel(id: number, dto: updatesubscriptiondto): Promise<string | import("typeorm").UpdateResult>;
}
