import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { ProductService } from './services/products.service';
import { DatabaseModule } from 'src/database/database.module';
import { productProviders } from 'src/database/entities/products/product.provider';
import { ProductRepository } from 'src/database/repositories/product.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [ProductService, ...productProviders],
})
export class ProductsModule {}
