import type { FC } from 'react';
import { Header } from '../../widgets/Header';
import { Footer } from '../../widgets/Footer';
import { Error500Content } from '../../widgets/Error500Content';
export const Error500Page: FC = () => {
  return (
    <>
    <Header />
    <Error500Content />
    <Footer />
    </>
  );
};
