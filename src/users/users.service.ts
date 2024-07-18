import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 12);
    const user: User = await this.userRepository.save(createUserDto);
    delete user.password;
    return user;
  }

  async login(createUserDto: CreateUserDto, response: Response) {
    const user = await this.userRepository.findOneBy({
      username: createUserDto.username,
    });

    if (!user) {
      throw new BadRequestException('Usuario no existe');
    }

    if (!(await bcrypt.compare(createUserDto.password, user.password))) {
      throw new BadRequestException('Contraseña incorrecta');
    }

    const jwt = await this.jwtService.signAsync({ username: user.username });
    response.cookie('jwt', jwt, { httpOnly: true });

    return {
      message: 'success',
    };
  }

  async user(request: Request): Promise<User> {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verifyAsync(cookie);
      if (!data) {
        throw new UnauthorizedException();
      }
      const user = await this.userRepository.findOneBy({
        username: data['username'],
      });
      delete user.password;
      return user;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  async logout(response: Response) {
    response.clearCookie('jwt');
    return {
      message: 'success',
    };
  }

  async validateUser(request: Request) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verifyAsync(cookie);
      return data ? true : false;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
