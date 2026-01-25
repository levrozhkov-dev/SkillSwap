import { Controller, Post, Body } from '@nestjs/common';
import { AuthService, User } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    const user: User = this.AuthService.findUserByEmailAndPassword(
      body.email,
      body.password,
    );
    return {
      message: 'Успешный вход',
      user,
    };
  }
}
