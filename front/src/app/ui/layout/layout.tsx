import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <header>
        <div>HEADER</div>
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
