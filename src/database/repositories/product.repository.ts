import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/database/repositories/base-repository';
import { Product } from 'src/database/entities/products/product.entity';

@Injectable()
export class ProductRepository extends BaseRepository<Product> {
  constructor() {
    super(Product);
  }
}
