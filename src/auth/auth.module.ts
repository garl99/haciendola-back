import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UserService } from 'src/users/services/users.service';
import { JwtModule } from '@nestjs/jwt';
import { UserRepository } from 'src/database/repositories/user.repository';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        // const jwtKey =
        //   process.env.JWT_KEY || configService.get<string>('JWT_KEY');
        return {
          // secret: jwtKey,
          secret: 'SECRET KEY VALUE FOR SIGN JWT TOKEN',
          signOptions: { expiresIn: '24h' },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, UserRepository],
})
export class AuthModule {}
