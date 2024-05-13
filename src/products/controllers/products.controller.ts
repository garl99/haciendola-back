import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProductService } from '../services/products.service';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { Product } from 'src/database/entities/products/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Product | null> {
    return await this.productService.findById(+id);
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return await this.productService.create(createProductDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product | null> {
    const res = await this.productService.update(+id, updateProductDto);

    return res;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<number> {
    return await this.productService.delete(+id);
  }
}
