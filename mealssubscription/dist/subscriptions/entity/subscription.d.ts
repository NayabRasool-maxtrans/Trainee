import { users } from "../../users/entities/users.entity";
import { mealsplan } from "../../meals/entity/mealsplanentity";
import { payments } from "../../payments/entity/paymentsentity";
export declare enum STATUS {
    ACTIVE = "ACTIVE",
    CANCELLED = "CANCELLED",
    COMPLETED = "COMPLETED"
}
export declare class subscription {
    id: number;
    start_date: Date;
    end_date: Date;
    status: STATUS;
    users_id: number;
    meals_id: number;
    user: users;
    meals: mealsplan;
    payment: payments[];
}
