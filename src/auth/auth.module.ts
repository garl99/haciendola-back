import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UserService } from 'src/users/services/users.service';
import { JwtModule } from '@nestjs/jwt';
import { UserRepository } from 'src/database/repositories/user.repository';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: "SECRET MUST NOT BE HERE - THIS ITS JUST FOR THE TEST",
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, UserRepository],
})
export class AuthModule {}
