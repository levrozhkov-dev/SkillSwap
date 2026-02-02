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
import { GuardRoute } from './GuardRoute';
import { ProfileFavoritesPage } from '../../pages/profile-favorites';


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
        path: '/card/:id',
        element: <CardPage />,
      },
    ],
  },

  // Защищённые маршруты (только для авторизованных)
  {
    element: <GuardRoute type="protected" />,
    children: [
      {
        element: <Layout />,
        children: [
          { path: '/profile', element: <ProfilePage /> },
          {
            path: '/profile/favorites',
            element: <ProfileFavoritesPage />,
          },
        ],
      },
    ],
  },

  // Отдельные страницы
  {
    element: <GuardRoute type="public-only" redirectTo="/" />,
    children: [
      { path: '/register', element: <RegisterPage /> },
      { path: '/login', element: <LoginPage /> },
    ],
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
