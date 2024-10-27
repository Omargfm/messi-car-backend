import { Module } from '@nestjs/common';
import { UserController } from './infrastructure/controller/user.controller';
import { UserService } from './application/user/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
