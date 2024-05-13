import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/database/repositories/base-repository';
import { User } from '../entities/users/user.entity';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor() {
    super(User);
  }
}
