import { Sequelize } from 'sequelize-typescript';
import { Product } from '../entities/products/product.entity';
import { User } from '../entities/users/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'bwwidua5s1pgs65e7jbj-mysql.services.clever-cloud.com',
        port: 3306,
        username: 'ujxfetvpoqzmgexp',
        password: 'KtDWvLxguXeB1uYNGM6a',
        database: 'bwwidua5s1pgs65e7jbj',
        // dialect: 'mysql',
        // host: 'localhost',
        // port: 3306,
        // username: 'admin',
        // password: 'admin',
        // database: 'haciendola_test',
      });
      sequelize.addModels([Product, User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
