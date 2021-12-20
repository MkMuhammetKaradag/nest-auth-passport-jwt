import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './schema/product.schema';
@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Product.name, schema: ProductSchema }],
      'Product',
    ),
    PassportModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
