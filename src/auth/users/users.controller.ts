import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create.Usert.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  async userRegister(@Body() user: CreateUserDto) {
    return this.userService.registerUser(user);

    // return 'hello';
  }
}
