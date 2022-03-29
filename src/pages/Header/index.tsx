import React from "react";
import { HomePage, HomeCarpet, ChevronIcon } from "./styles";
import { HiChevronDoubleDown } from "react-icons/hi";

const Header = () => {
  return (
    <HomePage>
      <HomeCarpet>Bem-vindos a Tapetes & Tal</HomeCarpet>
      <ChevronIcon>
        <a href="#about">
          <HiChevronDoubleDown />
        </a>
      </ChevronIcon>
    </HomePage>
  );
};

export default Header;
