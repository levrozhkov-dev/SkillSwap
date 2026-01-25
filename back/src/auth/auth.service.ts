import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  city: string;
  age: number;
  liked: number;
  avatar: string;
  description: string;
  skills: any;
}

@Injectable()
export class AuthService {
  private filePath = join(process.cwd(), 'db', 'users.json');

  private readUsers(): User[] {
    return JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
  }

  findUserByEmailAndPassword(email: string, password: string): User {
    const users = this.readUsers();
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      throw new UnauthorizedException('Неверный email или пароль');
    }

    return user;
  }
}
