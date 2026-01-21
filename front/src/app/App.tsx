import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routeObjects } from './routing/routes';
import { GetCategories } from '../shared/api/req/getCategories';
import { setCategories } from '../features/slice/categoriesSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetCities } from '../shared/api/req/getCities';
import { setCities } from '../features/slice/citiesSlice';

const router = createBrowserRouter(routeObjects);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    GetCategories('categories')
      .then((res) => {
        dispatch(setCategories(res.data));
      })
      .catch((err) => {
        console.error('Error fetching categories: ', err);
      });
    GetCities('cities')
      .then((res) => {
        dispatch(setCities(res.data));
      })
      .catch((err) => {
        console.error('Error fetching cities: ', err);
      });
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
