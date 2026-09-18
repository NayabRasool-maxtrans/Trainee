import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from './entities/users.entity';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports:[TypeOrmModule.forFeature([users])]

})
export class UsersModule {}
