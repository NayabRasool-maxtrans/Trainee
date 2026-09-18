import { Module } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionsController } from './subscriptions.controller';
import { subscription } from './entity/subscription';
import { users } from '../users/entities/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mealsplan } from '../meals/entity/mealsplanentity';

@Module({
  providers: [SubscriptionsService],
  controllers: [SubscriptionsController],
  imports:[TypeOrmModule.forFeature([users,subscription,mealsplan])]
})
export class SubscriptionsModule {}
