import { Injectable } from '@nestjs/common';
import datauser from '../db/users.json';
import * as fs from 'fs';
import * as path from 'path';

interface Offer {
  userId: number;
  status: string;
  date: string;
}

interface User {
  id: number;
  name: string;
  date: string;
  liked: number;
  skills?: { category: number };
  sentOffers?: Offer[];
  receivedOffers?: Offer[];
}
@Injectable()
export class UserService {
  private users: User[] = datauser as User[];

  getUser(): object {
    return datauser;
  }
  getUsers(): object {
    const users = [...datauser];

    // Сортируем пользователей по дате (новые сверху)
    const sortedByDate = [...users].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    // Берём 3 новых пользователя
    const newUsers = sortedByDate.slice(0, 3);

    // Перемешиваем массив для популярного и рекомендуемого
    const shuffledUsers = [...users].sort(() => Math.random() - 0.5);

    // 3 популярных пользователя
    const popularUsers = shuffledUsers.slice(0, 3);

    //  9 рекомендуемых пользователей
    // Чтобы не было пересечений с popular/new, фильтруем их
    const excludedIds = new Set([
      ...popularUsers.map((u) => u.id),
      ...newUsers.map((u) => u.id),
    ]);

    const recommendedUsers = shuffledUsers
      .filter((u) => !excludedIds.has(u.id))
      .slice(0, 9);

    return {
      popular: popularUsers,
      new: newUsers,
      recommended: recommendedUsers,
    };
  }

  getUserById(id: number): object {
    const user = datauser.find((user) => user.id === id);
    return user || {};
  }

  getUserNew(): object {
    const users = [...datauser];
    const sortedByDate = [...users].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    return sortedByDate;
  }

  getUsersByLikes() {
    const users = [...datauser];

    // Сортировка по количеству лайков (от большего к меньшему)
    const sortedByLikes = users.sort((a, b) => {
      return b.liked - a.liked;
    });

    return sortedByLikes;
  }
  getUsersByCategory(categoryId) {
    const users = [...datauser];

    const filteredUsers = users.filter(
      (user) => Number(user.skills?.category) === Number(categoryId),
    );

    return filteredUsers.sort((a, b) => b.liked - a.liked);
  }
  sendOffer(senderId: number, receiverId: number): object {
    const sender = this.users.find((user) => user.id === senderId);
    const receiver = this.users.find((user) => user.id === receiverId);

    if (!sender || !receiver) {
      return { error: 'Пользователь не найден' };
    }

    // Инициализация массивов, если их нет
    sender.sentOffers = sender.sentOffers ?? [];
    receiver.receivedOffers = receiver.receivedOffers ?? [];

    // Проверка на уже отправленное предложение
    const alreadySent = sender.sentOffers.find(
      (offer) => offer.userId === receiverId,
    );
    if (alreadySent) {
      return { message: 'Предложение уже отправлено' };
    }

    const newOffer: Offer = {
      userId: receiver.id,
      status: 'pending',
      date: new Date().toISOString(),
    };

    sender.sentOffers.push(newOffer);

    receiver.receivedOffers.push({
      userId: sender.id,
      status: 'pending',
      date: new Date().toISOString(),
    });

    const filePath = path.join(__dirname, '../db/users.json');
    fs.writeFileSync(filePath, JSON.stringify(this.users, null, 2));

    return { message: 'Предложение отправлено', sender, receiver };
  }

  updateUser(userUpdate) {
    const index = this.users.findIndex((u) => u.id === userUpdate.id);
    if (index === -1) return null; // пользователь не найден

    this.users[index] = { ...this.users[index], ...userUpdate };

    fs.writeFileSync(
      path.join(__dirname, '../db/users.json'),
      JSON.stringify(this.users, null, 2),
      'utf-8',
    );

    return this.users[index];
  }
}
