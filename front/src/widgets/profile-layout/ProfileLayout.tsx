import { Outlet } from 'react-router-dom';
import { ProfileSidebar } from '../../entities/profileSidebar';
import * as Styled from './ProfileLayout.styled';

export const ProfileLayout = () => {
  return (
    <Styled.Container>
      <ProfileSidebar />
      <Styled.Content>
        <Outlet />
      </Styled.Content>
    </Styled.Container>
  );
};
