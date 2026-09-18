import { Module } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mealsplan } from './entity/mealsplanentity';

@Module({
  providers: [MealsService],
  controllers: [MealsController],
  imports:[TypeOrmModule.forFeature([mealsplan])]
})
export class MealsModule {}
