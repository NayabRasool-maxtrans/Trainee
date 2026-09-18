import { subscription } from "../../subscriptions/entity/subscription";
export declare enum PAYMENTSTATUS {
    PENDING = "PENDING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
    REFUND = "REFUND"
}
export declare class payments {
    id: number;
    amount: number;
    status: PAYMENTSTATUS;
    subscription_id: number;
    subs: subscription;
}
