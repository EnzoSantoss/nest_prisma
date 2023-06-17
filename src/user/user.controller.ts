import { Controller, Post, Get, Body, Param, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getUser() {
    return this.userService.getAllUsers();
  }

  @Put(':id')
  async attUser(@Param('id') id: string) {
    await this.userService.attUser(id, 'teste');
    console.log(id);
  }

  @Post()
  async criar(@Body() data: CreateUserDto) {
    await this.userService.criarUser(data);
  }
}
