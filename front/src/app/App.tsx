import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routeObjects } from './routing/routes';
import { GetCategories } from '../shared/api/req/getCategories';
import { setCategories } from '../features/slice/categoriesSlice';
import { store } from '../providers/store/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Создаём роутер
const router = createBrowserRouter(routeObjects);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    GetCategories('categories')
      .then((res) => {
        //проверяем получили ли мы категории
        dispatch(setCategories(res.data));

        //проверяем получилось ли сохранить категории в стор
        console.log(store.getState());
      })
      .catch((err) => {
        console.error('Error fetching categories: ', err);
      });
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
