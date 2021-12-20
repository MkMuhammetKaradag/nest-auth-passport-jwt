import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/auth', {
      connectionName: 'auth',
    }),
    MongooseModule.forRoot('mongodb://localhost/Product', {
      connectionName: 'Product',
    }),
  ],
})
export class DatabaseModule {}
