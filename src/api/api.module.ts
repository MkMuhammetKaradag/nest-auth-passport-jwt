import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from 'src/database/database.module';
import { ProductModule } from './products/product.module';

@Module({
  imports: [ProductModule],
})
export class ApiModule {}
