import { useState } from 'react';
import * as Styled from "./styled";
import { HeaderInput } from "../../entities/header-input";

export const Header = () => {
  // Временно: состояние для HeaderInput
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <Styled.HeaderWrapper>
      <HeaderInput
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Поиск..."
      />
    </Styled.HeaderWrapper>
  );
};
