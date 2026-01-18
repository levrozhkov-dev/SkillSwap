import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routeObjects } from './routing/routes';
import { GlobalStyles } from '../shared/styles/theme';

// Создаём роутер
const router = createBrowserRouter(routeObjects);

function App() {
  useEffect(() => {
    fetch('http://localhost:2000/')
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
