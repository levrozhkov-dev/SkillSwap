import type { FC } from "react";
import { CardAge, CardAvatar } from "../../entities/card";
import * as Styled from "./UserCardProfile.styled";
import { CardUserDescription } from "../../entities/card/ui/Card.styled";
import type { CategorySelection, UserSkills } from "../ListCard/types/user";
import { CardCategories } from "../../entities/card/ui/CardCategories";

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
      <CardUserDescription>
        <CardAvatar src={avatarUrl} alt={`${name} avatar`} />
        <Styled.UserInfo>
          <Styled.UserNameProfile>{name}</Styled.UserNameProfile>
          <Styled.UserInfoData>
            {city}, <CardAge age={age} />
          </Styled.UserInfoData>
        </Styled.UserInfo>
      </CardUserDescription>
      <Styled.UserDescription>{description}</Styled.UserDescription>
      <CardCategories skills={skills} categories={categories} />
    </Styled.UserCardProfile>
  );
};
