import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products/products.module';
import { CustomerModule } from './customer/customer.module';


@Module({
  imports: [ProductsModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
