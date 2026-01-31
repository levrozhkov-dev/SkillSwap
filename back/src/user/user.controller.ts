import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users') // Базовый путь: /users
export class UserController {
  constructor(private readonly appService: UserService) {}
  // Все пользователи
  @Get('all')
  getAllUsers() {
    return this.appService.getUser();
  }
  // Популярные пользователи,новые пользователи и рекомендации
  @Get('user')
  getUsers() {
    return this.appService.getUsers();
  }

  @Get('new')
  getUserNew() {
    return this.appService.getUserNew();
  }
  @Get('likes')
  getUsersByLikes() {
    return this.appService.getUsersByLikes();
  }
  @Post('category')
  getUsersByCategory(@Body('categoryId') categoryId: number) {
    return this.appService.getUsersByCategory(categoryId);
  }
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.appService.getUserById(id);
  }
}
