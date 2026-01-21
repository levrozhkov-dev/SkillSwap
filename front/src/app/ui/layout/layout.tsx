import { Outlet } from 'react-router-dom';
import { Header } from '../../../widgets/Header';
import { Footer } from '../../../widgets/Footer';
import * as Styled from './styled';
export const Layout = () => {
  return (
    <>
      <Header />
      <Styled.LayoutContainer>
        <Outlet />
      </Styled.LayoutContainer>
      <Footer />
    </>
  );
};
