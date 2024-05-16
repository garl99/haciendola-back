import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UserService } from '../services/users.service';
import { User } from 'src/database/entities/users/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<User | null> {
    return await this.userService.findById(+id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.create(createUserDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User | null> {
    const [, updatedUsers] = await this.userService.update(+id, updateUserDto);
    if (updatedUsers.length === 0) {
      return null;
    }
    return updatedUsers[0];
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<number> {
    return await this.userService.delete(+id);
  }
}
