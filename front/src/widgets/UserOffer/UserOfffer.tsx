import type { FC } from "react";
import type { User } from "../ListCard/types/user";
import * as Styled from "./UserOffer.styled";
import { UserCardProfile } from "../../entities/UserCardProfile/UserCardProfile";
import { OfferDetails } from "../../entities/offer/ui/OfferDetails";

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
      <OfferDetails 
        cardId = {userInfo.id}
        title={userInfo.skills.name}
        skill={
          {
            categoryId: userInfo.skills.category,
            subCategoryId: userInfo.skills.subcategory
          }
        }
        description={userInfo.skills.description}
        images={userInfo.skills.imgs}
        liked = {userInfo.liked} />
    </Styled.UserOffer>
  );
};