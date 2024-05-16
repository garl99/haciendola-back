import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/database/entities/users/user.entity';
import { UserService } from 'src/users/services/users.service';
import { SignUpDto } from '../dtos/SignDto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}
  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne({ username });

    if (user) {
      if (user?.password !== pass) {
        throw new UnauthorizedException();
      }
      const payload = { sub: user.id, username: user.username };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } else {
      throw new BadRequestException({ message: 'User not found', code: 400 });
    }
  }

  async signUp(payload: SignUpDto): Promise<User> {
    const existUser = await this.usersService.findOne({
      username: payload.username,
    });
    if (existUser) {
      throw new BadRequestException({
        message: 'User already registered',
        code: 400,
      });
    }
    const user = this.usersService.create(payload);

    return user;
  }
}
