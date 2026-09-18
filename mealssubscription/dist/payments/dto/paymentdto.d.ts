declare enum PAYMENTSTATUS {
    PENDING = "PENDING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
    REFUND = "REFUND"
}
export declare class paymentdto {
    status: PAYMENTSTATUS;
    subscription_id: number;
}
export {};
