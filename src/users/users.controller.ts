import {
  Controller,
  Post,
  Body,
  Res,
  Req,
  Get,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Request, Response } from 'express';
import { AuthGuard } from './auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
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

  @UseGuards(AuthGuard)
  @Get('user')
  async user(@Req() request: Request) {
    return await this.usersService.user(request);
  }

  @UseGuards(AuthGuard)
  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    return await this.usersService.logout(response);
  }

  @UseGuards(AuthGuard)
  @Post('password')
  async password(
    @Req() request: Request,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.usersService.password(request, updateUserDto);
  }
}
