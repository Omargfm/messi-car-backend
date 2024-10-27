import { UserDto } from './user.dto';

export class UsersDto {
  users: UserDto[];

  constructor(users: UserDto[]) {
    this.users = users;
  }
}
