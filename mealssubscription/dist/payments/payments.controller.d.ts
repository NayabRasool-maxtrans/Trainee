import { paymentdto } from './dto/paymentdto';
import { PaymentsService } from './payments.service';
import { upadetPaymentDto } from './dto/paymentupdate';
export declare class PaymentsController {
    private readonly paymentserv;
    constructor(paymentserv: PaymentsService);
    create(dto: paymentdto): Promise<import("./entity/paymentsentity").payments>;
    getall(): Promise<import("./entity/paymentsentity").payments[]>;
    getbysubscription(id: number): Promise<import("./entity/paymentsentity").payments[]>;
    refundamount(id: number, dto: upadetPaymentDto): Promise<import("typeorm").UpdateResult>;
}
