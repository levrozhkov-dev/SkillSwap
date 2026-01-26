import type { FC } from "react";
import type { User } from "../ListCard/types/user";
import * as Styled from "./UserOffer.styled";
import { UserCardProfile } from "../../entities/UserCardProfile/UserCardProfile";

type UserOfferProps = {
  userInfo: User;
}

export const UserOffer: FC<UserOfferProps> = ({ userInfo }) => {
  return (
    <Styled.UserOffer>
      <UserCardProfile 
        avatarUrl={userInfo.avatar} 
        name={userInfo.name} 
        age={userInfo.age} 
        city={userInfo.city}
        description={userInfo.description}
        skills={[userInfo.skills]} categories={userInfo.categories} />
    </Styled.UserOffer>
  );
};