import type { RouteObject } from 'react-router-dom';
import {
  CardPage,
  CatalogPage,
  Error404Page,
  Error500Page,
  LoginPage,
  ProfilePage,
  RegisterPage,
} from '../../pages';
import { Layout } from '../ui/layout';

export const routeObjects: RouteObject[] = [
  // Основные страницы — рендерятся внутри Layout (через Outlet)
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <CatalogPage />,
      },
      {
        path: '/card',
        element: <CardPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
    ],
  },

  // Отдельные страницы
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },

  // Страницы ошибок
  {
    path: '/error404',
    element: <Error404Page />,
  },
  {
    path: '/error500',
    element: <Error500Page />,
  },

  // 404 для всех неизвестных путей
  {
    path: '*',
    element: <Error404Page />,
  },
];
