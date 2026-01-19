import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routeObjects } from './routing/routes';
import { GlobalStyles } from '../shared/styles/theme';
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
    GetCategories('categories').then((res) => {
      
      //проверяем получили ли мы категории
      console.log('Categories: ', res);
      dispatch(setCategories(res.data));
      
      //проверяем получилось ли сохранить категории в стор
      console.log(store.getState());
    }).catch((err) => {
    console.error('Error fetching categories: ', err);
  });
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
