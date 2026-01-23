import type { FC } from 'react';
import { Error404 } from '../../widgets/error404/error404';
import { Header } from '../../widgets/Header';
import { Footer } from '../../widgets/Footer';

export const Error404Page: FC = () => {
  return (
    <>
      <Header />
      <Error404 />
      <Footer />
    </>
  );
};
