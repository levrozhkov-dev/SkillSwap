import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routeObjects } from './routing/routes';
import { GlobalStyles } from '../shared/styles/theme';

// Создаём роутер
const router = createBrowserRouter(routeObjects);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
