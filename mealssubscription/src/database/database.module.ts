import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
   imports: [TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory:(configservice:ConfigService)=>({
            type:'mysql',
            port:configservice.get<number>('DB_PORT'),
            host:configservice.get<string>('DB_HOST'),
            username:configservice.get<string>('DB_USERNAME'),
            password:configservice.get<string>('DB_PASSWORD'),
            database:configservice.get<string>('DB_DATABASE'),
            autoLoadEntities:true,
            synchronize:true,
        })
        
    })]})
export class DatabaseModule { }
