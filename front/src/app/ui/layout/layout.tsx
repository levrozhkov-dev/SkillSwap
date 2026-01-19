import { Outlet } from 'react-router-dom';
import { Header } from '../../../widgets/Header';

export const Layout = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div>FOOTER</div>
      </footer>
    </div>
  );
};
