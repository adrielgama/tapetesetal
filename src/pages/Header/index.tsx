import { HiChevronDoubleDown } from "react-icons/hi";

import * as S from "./styles";

export const Header = () => {
  return (
    <S.HomePage>
      <S.HomeCarpet>Bem-vindos a Tapetes &#38; Tal</S.HomeCarpet>
      <S.ChevronIcon>
        <a href="#about">
          <HiChevronDoubleDown />
        </a>
      </S.ChevronIcon>
    </S.HomePage>
  );
};
