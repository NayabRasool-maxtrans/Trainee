import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { user } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { profile } from '../profile/Dto/profile.entity';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports:[TypeOrmModule.forFeature([user,profile])]
})
export class UsersModule {}
