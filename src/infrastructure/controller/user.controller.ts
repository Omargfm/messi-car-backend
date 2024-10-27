import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../../application/user/user.service';
import { UserDto } from '../dto/user.dto';
import { UsersDto } from '../dto/users.dto';

@Controller('users')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getUsers(): UsersDto {
    return this.appService.getUsers();
  }

  @Post()
  createUser(@Body() userDto: UserDto): UserDto {
    return this.appService.createUser(userDto);
  }

  @Get(':id')
  getUser(@Param('id') id: string): UserDto {
    return this.appService.getUser(id);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): string {
    return this.appService.deleteUser(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() userDto: UserDto): UserDto {
    return this.appService.updateUser(id, userDto);
  }
}
