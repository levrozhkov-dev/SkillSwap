import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routeObjects } from './routing/routes';
import { fetchCategories } from '../features/slice/categoriesSlice';
import { useEffect } from 'react';
import { useAppDispatch } from '../providers/store/store';
import { GetCities } from '../shared/api/req/getCities';
import { setCities } from '../features/slice/citiesSlice';

const router = createBrowserRouter(routeObjects);

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    GetCities('cities')
      .then((res) => {
        dispatch(setCities(res.data));
      })
      .catch((err) => {
        console.error('Error fetching cities: ', err);
      });
    // Вместо прямого вызова API и dispatch(setCategories())
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
