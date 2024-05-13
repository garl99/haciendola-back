import { Injectable } from '@nestjs/common';
import { Product } from 'src/database/entities/products/product.entity';
import { ProductRepository } from 'src/database/repositories/product.repository';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  async findById(id: number): Promise<Product | null> {
    return this.productRepository.findById(id);
  }

  async create(productData: CreateProductDto): Promise<Product> {
    return this.productRepository.create(productData);
  }

  async update(id: number, productData: UpdateProductDto): Promise<Product> {
    return this.productRepository
      .update(id, productData)
      .then(() => this.findById(id));
  }

  async delete(id: number): Promise<number> {
    return this.productRepository.delete(id);
  }
}
