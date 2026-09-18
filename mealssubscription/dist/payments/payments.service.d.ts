import { Repository } from 'typeorm';
import { payments } from './entity/paymentsentity';
import { paymentdto } from './dto/paymentdto';
import { subscription } from '../subscriptions/entity/subscription';
import { upadetPaymentDto } from './dto/paymentupdate';
export declare class PaymentsService {
    private readonly paymentrepo;
    private readonly subsrepo;
    constructor(paymentrepo: Repository<payments>, subsrepo: Repository<subscription>);
    create(dto: paymentdto): Promise<payments>;
    getall(): Promise<payments[]>;
    listbysubscription(id: number): Promise<payments[]>;
    refundamount(id: number, dto: upadetPaymentDto): Promise<import("typeorm").UpdateResult>;
}
