import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('')
  private async createProduct(@Res() res: any, @Body() Dto: CreateProductDto) {
    const product = await this.productService.createProduct(Dto);
    return res.status(HttpStatus.OK).json(product);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  private async getProducts(@Res() res: any) {
    const product = await this.productService.getProducts();
    return res.status(HttpStatus.OK).json(product);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  private async getProduct(@Res() res: any, @Param('id') id: string) {
    const product = await this.productService.getProduct(id);
    return res.status(HttpStatus.OK).json(product);
  }
}
