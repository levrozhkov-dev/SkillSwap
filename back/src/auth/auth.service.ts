import { Injectable, UnauthorizedException } from '@nestjs/common';
import { join } from 'path';
import { promises as fs } from 'fs';

export interface User {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  private filePath = join(__dirname, '../db/users.json');

  // Асинхронное чтение всех пользователей
  private async readUsers(): Promise<User[]> {
    const data = await fs.readFile(this.filePath, 'utf8');
    return JSON.parse(data);
  }

  // Получить всех пользователей (на будущее)
  async getAllUsers(): Promise<User[]> {
    return this.readUsers();
  }

  // Проверка email и пароля
  async findUserByEmailAndPassword(
    email: string,
    password: string,
  ): Promise<User> {
    const users = await this.readUsers();
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      throw new UnauthorizedException('Неверный email или пароль');
    }

    return user;
  }
}
