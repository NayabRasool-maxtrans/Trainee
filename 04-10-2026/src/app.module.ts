import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { user } from './users/user.entity';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory:()=>({
    type:'mysql',
    //entities:[user],
    autoLoadEntities:true, //when create new entity automatically when run 
    synchronize:true,
    host:'localhost',
    port:3306,
    username:'root',
    password:'93810',
    database:'company'

  })
  }), UsersModule,ProfileModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
