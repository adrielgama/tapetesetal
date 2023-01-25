import styled from "styled-components";

import * as S from "./style";

export interface Props {
  menuHamburgerOpen: boolean;
  setMenuHamburgerOpen: (v: boolean) => void;
}

export const Hamburger = (props: Props) => (
  <S.StyledHamburger
    open={props.menuHamburgerOpen}
    onClick={() => props.setMenuHamburgerOpen(!props.menuHamburgerOpen)}
  >
    <div />
    <div />
    <div />
  </S.StyledHamburger>
);
