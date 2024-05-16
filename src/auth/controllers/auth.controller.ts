import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { CreateUserDto } from 'src/users/dtos/user.dto';
import { SignInDto, SignUpDto } from '../dtos/SignDto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private _authService: AuthService) {}

  @Post('/sign-in')
  async signIn(@Body() payload: SignInDto) {
    return await this._authService.signIn(payload.username, payload.password);
  }

  @Post('/sign-up')
  async signUp(@Body() payload: SignUpDto) {
    return await this._authService.signUp(payload);
  }
}
