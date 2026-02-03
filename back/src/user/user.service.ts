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
  getFavouriteCards(cardIds: number[]) {
    return this.users.filter((card) => cardIds.includes(card.id));
  }

  createUser(data: any) {
    // Находим максимальный существующий ID

    const maxId = this.users.reduce((max, user) => Math.max(max, user.id), 0);
    let age = 0;
    if (data.birthDate) {
      const birth = new Date(data.birthDate);
      const today = new Date();
      age = today.getFullYear() - birth.getFullYear();
      const m = today.getMonth() - birth.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
      }
    }

    const categories = (data.learnCategories || []).map((cat: any) => ({
      idCategory: Number(cat.categoryId),
      idSubCategory: (cat.subCategoryIds || []).map((sub: any) => Number(sub)),
    }));

    // Преобразуем данные навыков
    let skillsObj = {};
    if (data.skillTitle) {
      skillsObj = {
        id:
          this.users.reduce(
            (max, u) => Math.max(max, (u.skills as any)?.id || 0),
            0,
          ) + 1,
        name: data.skillTitle,
        skill: data.skillTitle,
        category: Number(data.skillCategory),
        subcategory: Number(data.skillSubCategory),
        description: data.skillDescription || '',
        imgs: data.skillImages || [],
      };
    }

    // Создаём нового пользователя с уникальным ID и текущей датой
    const newUser = {
      id: maxId + 1,
      name: data.name,
      email: data.email,
      password: data.password,
      avatar: data.avatar,
      city: data.city,
      description: '',
      age: age,
      date: new Date().toISOString(),
      liked: 0,
      favourites: [],
      categories: categories,
      skills: data.skillTitle ? (skillsObj as any) : undefined,
      sentOffers: [],
      receivedOffers: [],
    };

    // Добавляем в массив пользователей
    this.users.push(newUser);

    // Сохраняем в JSON
    const filePath = path.join(__dirname, '../db/users.json');
    fs.writeFileSync(filePath, JSON.stringify(this.users, null, 2), 'utf-8');

    return newUser;
  }
}
