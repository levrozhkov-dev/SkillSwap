import { Injectable } from '@nestjs/common';
import datauser from '../db/users.json';

@Injectable()
export class UserService {
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
}
