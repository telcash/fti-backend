import { Controller, Post, Body, Res, Req, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.register(createUserDto);
  }

  @Post('login')
  async login(
    @Body() createUserDto: CreateUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    return await this.usersService.login(createUserDto, response);
  }

  @Get('user')
  async user(@Req() request: Request) {
    return await this.usersService.user(request);
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    return await this.usersService.logout(response);
  }
}
