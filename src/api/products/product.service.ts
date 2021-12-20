import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schema/product.schema';
import { CreateProductDto } from './dto/createProduct.dto';
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async getProducts(): Promise<Product[]> {
    return this.productModel.find();
  }

  async getProduct(productId: string): Promise<Product> {
    return this.productModel.findById(productId);
  }

  async createProduct(Dto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(Dto);
    return newProduct.save();
  }
  async updateProduct(
    productId: string,
    Dto: CreateProductDto,
  ): Promise<Product> {
    return this.productModel.findByIdAndUpdate(productId, Dto, { new: true });
  }

  async deleteProduct(productId: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(productId);
  }
}
