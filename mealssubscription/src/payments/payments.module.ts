import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { payments } from './entity/paymentsentity';
import { subscription } from '../subscriptions/entity/subscription';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService],
  imports:[TypeOrmModule.forFeature([payments,subscription])]
})
export class PaymentsModule {}
