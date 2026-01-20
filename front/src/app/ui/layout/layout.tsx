import { Outlet } from 'react-router-dom';
import { Header } from '../../../widgets/Header';

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <div>FOOTER</div>
      </footer>
    </div>
  );
};
