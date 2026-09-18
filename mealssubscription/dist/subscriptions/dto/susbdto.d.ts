declare enum STATUS {
    ACTIVE = "ACTIVE",
    CANCELLED = "CANCELLED",
    COMPLETED = "COMPLETED"
}
export declare class subscriptiondto {
    start_date: Date;
    end_date: Date;
    status: STATUS;
    users_id: number;
    meals_id: number;
}
export {};
