import { subscription } from "../../subscriptions/entity/subscription";
export declare class users {
    id: number;
    name: string;
    email: string;
    phone: number;
    subs: subscription[];
}
