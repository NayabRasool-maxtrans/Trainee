declare enum PAYMENTSTATUS {
    PENDING = "PENDING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
    REFUND = "REFUND"
}
export declare class upadetPaymentDto {
    status: PAYMENTSTATUS;
    subscription_id: number;
}
export {};
