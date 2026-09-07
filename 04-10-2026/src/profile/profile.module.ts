import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { profile } from './Dto/profile.entity';


@Module({
  providers: [ProfileService],
  controllers: [ProfileController],
  imports:[TypeOrmModule.forFeature([profile])]
})
export class ProfileModule {}
