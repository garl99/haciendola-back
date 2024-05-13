import { Module } from '@nestjs/common';
import { databaseProviders } from './providers/database.providers';
import { ProductRepository } from './repositories/product.repository';
import { UserRepository } from './repositories/user.repository';

@Module({
  providers: [...databaseProviders, ProductRepository, UserRepository],
  exports: [...databaseProviders, ProductRepository, UserRepository],
})
export class DatabaseModule {}
