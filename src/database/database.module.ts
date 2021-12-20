import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      connectionName: 'auth',
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_AUTH_URI'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      connectionName: 'Product',
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_PRODUCTS_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
