import { Controller, Post, Body } from '@nestjs/common';
import { AuthService, User } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {} // маленькая буква для инъекции

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    // обязательно await, так как метод асинхронный
    const user: User = await this.authService.findUserByEmailAndPassword(
      body.email,
      body.password,
    );

    return {
      message: 'Успешный вход',
      user,
    };
  }
}
