import { Injectable } from '@nestjs/common';
import { UserDto } from '../../infrastructure/dto/user.dto';
import { AddressDto } from '../../infrastructure/dto/address.dto';
import { UsersDto } from '../../infrastructure/dto/users.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  getUsers(): UsersDto {
    const userDtos = [this.getUser(uuidv4()), this.getUser(uuidv4())];
    return new UsersDto(userDtos);
  }

  getUser(id: string): UserDto {
    return new UserDto({
      id: id,
      email: 'mail@gmail.com',
      password: 'password',
      address: new AddressDto({ direction: 'Av Holland, nro 322' }),
    });
  }

  createUser(userDto: UserDto) {
    return userDto;
  }

  deleteUser(id: string) {
    return `Delete '${id}' successfully.`;
  }

  updateUser(id: string, userDto: UserDto) {
    return userDto;
  }
}
