import type { FC } from "react";
import { CardAge, CardAvatar } from "../card";
import * as Styled from "./UserCardProfile.styled";
import type { CategorySelection, UserSkills } from "../../widgets/ListCard/types/user";
import { UserCardCategories } from "./UserCardCategories";

type UserCardProfileProps = {
  avatarUrl: string;
  name: string;
  age: number;
  city: string;
  description: string;
  skills: UserSkills[];
  categories: CategorySelection[];
};

export const UserCardProfile: FC<UserCardProfileProps> = ({
  avatarUrl,
  name,
  age,
  city,
  description,
  skills,
  categories,
}) => {
  return (
    <Styled.UserCardProfile>
      <Styled.UserInfoWrapper>
        <CardAvatar src={avatarUrl} alt={`${name} avatar`} />
        <Styled.UserInfo>
          <Styled.UserNameProfile>{name}</Styled.UserNameProfile>
          <Styled.UserInfoData>
            {city}, <CardAge age={age} />
          </Styled.UserInfoData>
        </Styled.UserInfo>
      </Styled.UserInfoWrapper>
      <Styled.UserDescription>{description}</Styled.UserDescription>
      <UserCardCategories skills={skills} categories={categories} />
    </Styled.UserCardProfile>
  );
};
