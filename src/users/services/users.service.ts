import { Injectable } from '@nestjs/common';
import { User } from 'src/database/entities/users/user.entity';
import { UserRepository } from 'src/database/repositories/user.repository';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findById(id: number): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async create(userData: CreateUserDto): Promise<User> {
    return this.userRepository.create(userData);
  }

  async update(id: number, userData: UpdateUserDto): Promise<[number, User[]]> {
    return this.userRepository.update(id, userData);
  }

  async delete(id: number): Promise<number> {
    return this.userRepository.delete(id);
  }

  async findOne(data: any): Promise<User> {
    const options = {
      where: {
        ...data,
      },
    };
    return this.userRepository.findOne(options);
  }
}
