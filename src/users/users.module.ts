import { Module } from '@nestjs/common';
import { UserController } from './controllers/users.controller';
import { UserService } from './services/users.service';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from 'src/database/entities/users/user.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class UsersModule {}
